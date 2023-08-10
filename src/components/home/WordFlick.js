import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Programmer"], // "Front end Developer + Back end Developer",
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1500,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return text;
};

export default MyComponent;