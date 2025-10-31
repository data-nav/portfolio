import { useState, useEffect } from "react";

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingText({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}: TypingTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
