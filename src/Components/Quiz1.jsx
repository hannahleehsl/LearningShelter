import React, { useState } from 'react';
import styles from "./quiz.module.css";
import "../styles.css";

const Quiz = ({ onQuizCompleted }) => {
  const questions = [
    {
      questionText: "Which key combination allows you to move one cell to the LEFT in a table.",
      answerOptions: [
        { answerText: 'Shift + Space', isCorrect: false },
        { answerText: 'Shift + Tab', isCorrect: true },
        { answerText: 'Space + Tab', isCorrect: false },
        { answerText: 'Esc + Shift', isCorrect: false },
      ],
    },
    {
      questionText: 'Menu used to do the common functions such as Print, Save, and Open a file',
      answerOptions: [
        { answerText: 'File', isCorrect: true },
        { answerText: 'Edit', isCorrect: false },
        { answerText: 'View', isCorrect: false },
        { answerText: 'Properties', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a leader in Word',
      answerOptions: [
        { answerText: 'Bar at the bottom of the screen that contains the Windows applications button and all open programs.', isCorrect: false },
        { answerText: 'Bar at the bottom of a Word document that shows how many pages are in the document and which page the cursor is on.', isCorrect: false },
        { answerText: 'A tab set with solid lines, dots, or dashes leading up to it.', isCorrect: true },
        { answerText: 'General term referring to where the text appears on the page in comparison to the margins.', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      onQuizCompleted(); // Call the onQuizCompleted function from props
    }
  };

  return (
    <h3>
      <div className={styles['quiz-app']}>
        {showScore ? (
          <div className={styles['quiz-score-section']}>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className={styles['quiz-question-section']}>
                <div className={styles['quiz-question-count']}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className={styles['quiz-question-text']}>
                {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className={styles['quiz-answer-section']}>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                    key={answerOption.answerText}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    className={styles['quiz-button']}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </h3>
  );
};

export default Quiz;
