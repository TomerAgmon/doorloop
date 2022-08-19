import { useCallback, useEffect, useState } from "react";
import { WordStates } from "../components/word";

export function useTypeTest(words: any) {
  const [inputText, setInputText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: any) => {
      const text = e.currentTarget.value as string;

      if (text.endsWith(" ")) {
        const currWord = Object.keys(words)[currIndex];
        if (text.trim() === currWord) {
          words[text.trim()] = WordStates.Correct;
        } else {
          words[Object.keys(words)[currIndex]] = WordStates.Error;
        }

        words[Object.keys(words)[currIndex + 1]] = WordStates.InProgress;

        setCurrIndex((index) => index + 1);
        setInputText("");
      } else {
        setInputText(text);
      }
    },
    [currIndex, words]
  );

  return { inputText, handleKeyDown };
}
