import React, { useState } from 'react';

const SpeechRecognitionComponent = () => {
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  };

  return (
    <div className="speech-recognition-container">
      <button onClick={startListening}>Start Speaking</button>
      <p>Your speech: {transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
