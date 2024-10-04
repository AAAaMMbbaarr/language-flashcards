import React, { useState } from 'react';

const QuizComponent = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">Your Score: {score}/{questions.length}</div>
      ) : (
        <div>
          <div className="question-section">
            <h2>{questions[currentQuestion].questionText}</h2>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option) => (
              <button
                key={option.answerText}
                onClick={() => handleAnswer(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
