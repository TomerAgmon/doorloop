import { useCallback, useEffect, useState } from "react";

export function useTypeTest(testText: string, isGameOver: boolean) {
  const [leadingText, setLeadingText] = useState("");
  const [currChar, setCurrChar] = useState(testText.charAt(0));
  const [trailingText, setTrailingText] = useState(testText.substring(1));
  const [typos, setTypos] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      let updatedTrailingText = trailingText;
      let updatedLeadingText = leadingText;
      let updatedCurrChar = currChar;

      if (event.key === " " && currChar !== " ") {
        updatedTrailingText = trailingText.substring(
          trailingText.indexOf(" ") + 2
        );

        updatedLeadingText = testText.substring(
          0,
          testText.length - updatedTrailingText.length - 1
        );

        updatedCurrChar = trailingText.charAt(trailingText.indexOf(" ") + 1);

        setTypos((old) => old + 1);
      } else if (event.key === currChar) {
        updatedLeadingText = leadingText + currChar;
        updatedCurrChar = trailingText.charAt(0);
        updatedTrailingText = trailingText.substring(1);

        if (currChar === " ") {
          setCorrectCount((old) => old + 1);
        }
      } else {
        setTypos((old) => old + 1);
      }

      setLeadingText(updatedLeadingText);
      setCurrChar(updatedCurrChar);
      setTrailingText(updatedTrailingText);
    },
    [currChar, leadingText, testText, trailingText]
  );

  useEffect(() => {
    if (!isGameOver) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, isGameOver]);

  return { leadingText, currChar, trailingText, typos, correctCount };
}
