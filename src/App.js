import React, { useState } from 'react';
import './style.css';

function CombinedExample() {
  const [buttonText, setButtonText] = useState('upload');
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setButtonText('upload');
    setDisplayText(inputText);
  };
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleClearButtonClick = () => {
    setInputText('');
    setDisplayText('');
    setButtonText('upload');
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>{buttonText}</button>
      <button onClick={handleClearButtonClick}>delete</button>
      <p>{displayText}</p>
    </div>
  );
}

export default CombinedExample;
