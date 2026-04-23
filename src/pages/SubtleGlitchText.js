import { useEffect, useState } from "react";

function SubtleGlitchText({ text }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = text.split("");

      // randomly pick 1–2 positions
      const glitchCount = 1;

      for (let i = 0; i < glitchCount; i++) {
        const index = Math.floor(Math.random() * chars.length);

        if (chars[index] !== " ") {
          chars[index] = Math.random() > 0.5 ? "0" : "1";
        }
      }

      setDisplayText(chars.join(""));

      // revert back after short delay
      setTimeout(() => {
        setDisplayText(text);
      }, 200);

    }, 1000); // every 2 seconds

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="scramble">{displayText}</h1>;
}

export default SubtleGlitchText;