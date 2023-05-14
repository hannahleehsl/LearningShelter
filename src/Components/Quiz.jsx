import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci",
    },
  ];

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleQuizSubmit = () => {
    setQuizCompleted(true);
  };

  const renderQuizQuestion = () => {
    const question = quizData[currentQuestion];

    return (
      <div>
        <h3>{question.question}</h3>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  };

  const renderQuizResults = () => {
    const correctAnswers = quizData.reduce((count, question, index) => {
      return question.correctAnswer === userAnswers[index] ? count + 1 : count;
    }, 0);

    return (
      <div>
        <h3>Quiz Completed!</h3>
        <p>You answered {correctAnswers} out of {quizData.length} questions correctly.</p>
      </div>
    );
  };

  return (
    <div>
      {quizCompleted ? renderQuizResults() : renderQuizQuestion()}
      {currentQuestion === quizData.length - 1 && !quizCompleted && (
        <button onClick={handleQuizSubmit}>Submit Quiz</button>
      )}
    </div>
  );
};

export default Quiz;