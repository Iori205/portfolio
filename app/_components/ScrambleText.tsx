"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  step?: number;
  characters?: string;
}

export function ScrambleText({
  text,
  className = "",
  speed = 30,
  step = 0.5,
  characters = DEFAULT_CHARS,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((letter, index) => {
          if (letter === " ") return " ";

          if (index < iteration) {
            return text[index];
          }

          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplay(scrambled);

      iteration += step;

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        setDisplay(text);
      }
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span onMouseEnter={scramble} className={className}>
      {display}
    </span>
  );
}
