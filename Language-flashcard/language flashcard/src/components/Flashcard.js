import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ word, translation }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      {flipped ? translation : word}
    </div>
  );
};

export default Flashcard;
