/**
 * Courses component
 *
 * Features the differenct courses available for
 * the students to learn
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import image from "../images/desk.jpg";

const lessons = [
  {
    title: "Master Microsoft Word",
    videos: [
      { id: 1, title: "Introduction to Word", videoId: "Cw6a3b5QoAs" },
      { id: 2, title: "Become an Expert", videoId: "eaB9L1QkD0c" },
      { id: 3, title: "Final Tips & Tricks", videoId: "Q_AaL6ljudU" },
      // Add more videos for Chapter 1
    ],
  },
  {
    title: "Chapter 2",
    videos: [
      { id: 3, title: "State and Lifecycle", videoId: "ghi789" },
      { id: 4, title: "Handling Events", videoId: "jkl012" },
      // Add more videos for Chapter 2
    ],
  },
  // Add more chapters as needed
];

const Courses = ({ lessons }) => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [videoWatched, setVideoWatched] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleVideoWatched = () => {
    setVideoWatched(true);
  };

  const handleQuizCompleted = () => {
    setQuizCompleted(true);
  };

  const handleNextLesson = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex + 1);
    setVideoWatched(false);
    setQuizCompleted(false);
  };

  if (!lessons || lessons.length === 0) {
    return <div>No lessons available.</div>;
  }

  const currentLesson = lessons[currentLessonIndex];

  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}></div>
      <h2 style={{ textAlign: "center" }}>Courses</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}></div>
      <h3 style={{ textAlign: "center" }}>Current Lesson: {currentLesson?.title}</h3>

      {videoWatched ? (
        quizCompleted ? (
          <div>
            <h3>Quiz Completed!</h3>
            {currentLessonIndex < lessons.length - 1 ? (
              <button onClick={handleNextLesson}>Next Lesson</button>
            ) : (
              <p>All lessons completed!</p>
            )}
          </div>
        ) : (
          <div>
            <h3>Take the Quiz</h3>
            {/* Render quiz component here */}
            <button onClick={handleQuizCompleted}>Submit Quiz</button>
          </div>
        )
      ) : (
        <div>
          <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}></div>
          {/* Render YouTube videos for the current lesson here */}
          {currentLesson?.videos.map((video) => (
            <div key={video.id} style={{ textAlign: "center", marginBottom: "5rem" }}>
              <h3 style={{fontSize: "25px", fontFamily: "Mono", marginBottom: "20px" }}>{video.title}</h3>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <button onClick={handleVideoWatched} style={{ fontSize: "18px", padding: "10px 20px" }}>
              Mark as Watched
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Courses.propTypes = {
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          videoId: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

const App = () => {
  return <Courses lessons={lessons} />;
};

export default App;
