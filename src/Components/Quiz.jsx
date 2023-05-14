import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = [
    {
      question: "Which key combination allows you to move one cell to the LEFT in a table.",
      options: ["Shift + Space", "Shift + Tab", "Space + Tab", "Esc + Shift"],
      correctAnswer: "Shift + Tab",
    },
    {
      question: "Menu used to do the common functions such as Print, Save, and Open a file",
      options: ["File", "Edit", "View", "Properties"],
      correctAnswer: "File",
    },
    {
      question: "What is a leader in Word",
      options: ["Bar at the bottom of the screen that contains the Windows applications button and all open programs.", "Bar at the bottom of a Word document that shows how many pages are in the document and which page the cursor is on.", "A tab set with solid lines, dots, or dashes leading up to it.", "General term referring to where the text appears on the page in comparison to the margins."],
      correctAnswer: "A tab set with solid lines, dots, or dashes leading up to it.",
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
    if (currentQuestion >= quizData.length) {
      return null; // Exit early if the currentQuestion exceeds the quizData length
    }

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
        {currentQuestion === quizData.length - 1 && !quizCompleted ? (
          <button onClick={handleQuizSubmit}>Submit Quiz</button>
        ) : (
          <button onClick={handleNextQuestion}>Next</button>
        )}
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
        <p>
          You answered {correctAnswers} out of {quizData.length} questions correctly.
        </p>
      </div>
    );
  };

  return <div>{quizCompleted ? renderQuizResults() : renderQuizQuestion()}</div>;
};

export default Quiz;