import styled from "styled-components";
import { useEffect, useState } from "react";
import { WordStates } from "./word";

const StatisticsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export function Statistics({ words }: { words: any }) {
  const [typos, setTypos] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    let correctCount = 0;
    let typos = 0;

    for (let wordState of Object.values(words)) {
      if (wordState === WordStates.Correct) {
        correctCount++;
      } else if (wordState === WordStates.Error) {
        typos++;
      }
    }

    setCorrectCount(correctCount);
    setTypos(typos);
  }, [words]);
  return (
    <StatisticsContainer>
      <span>Typos: {typos}</span>
      <span>Correct words: {correctCount}</span>
    </StatisticsContainer>
  );
}
