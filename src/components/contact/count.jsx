import React, { useState, useEffect } from 'react';
import "../../style/contact.css";


const CharacterCounter = () => {
  const [remainingChars, setRemainingChars] = useState(350);
  const maxChars = 350;

  useEffect(() => {
    updateCharCount();
  }, []);

  const updateCharCount = () => {
    const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const currentChars = textarea.value.length;
    const charsRemaining = maxChars - currentChars;
    setRemainingChars(charsRemaining);

    charCount.textContent = `* عدد الحروف المتبقية : ${charsRemaining}`;

    if (charsRemaining <= 0) {
      charCount.classList.add("over-limit");
    } else {
      charCount.classList.remove("over-limit");
    }
  };

  return (
    <div>
      <textarea  name="message" required="" id="message" maxLength="350" onInput={updateCharCount}></textarea>
      <div id="charCount">* عدد الحروف المتبقية : {remainingChars}</div>
    </div>
  );
};

export default CharacterCounter;
