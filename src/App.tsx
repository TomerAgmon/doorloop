import React, { useCallback, useState } from "react";
import styled from "styled-components";

import "./App.css";
import { Statistics } from "./components/statistics";
import Timer from "./components/timer";
import { TypeTest } from "./components/type-test";
import { WordStates } from "./components/word";
import { useTypeTest } from "./hooks/useTypeTest";
import { WORD_BANK } from "./word-bank";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "90%",
  height: "90%",
  marign: "auto",
  border: "2px solid black",
  background: "lightBlue",
  fontSize: "2rem",
  overflow: "auto",
  padding: "10px",
});

const shuffledWords = WORD_BANK.sort(
  () => Math.random() - Math.random()
).reduce((acc: any, curr: string) => {
  acc[curr] = WordStates.Pending;
  return acc;
}, {});

shuffledWords[Object.keys(shuffledWords)[0]] = WordStates.InProgress;

const GAME_TIME = 60;

function App() {
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGameOver = useCallback(() => {
    setIsGameOver(true);
  }, []);

  return (
    <Container>
      {isGameOver ? (
        <Statistics words={shuffledWords}></Statistics>
      ) : (
        <>
          <Timer seconds={GAME_TIME} onTimerEnded={handleGameOver} />
          <TypeTest words={shuffledWords} />
        </>
      )}
    </Container>
  );
}

export default App;
