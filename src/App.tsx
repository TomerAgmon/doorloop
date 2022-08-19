import React, { useCallback, useState } from "react";
import styled from "styled-components";

import "./App.css";
import { Statistics } from "./components/statistics";
import Timer from "./components/timer";
import { TypeTest } from "./components/type-test";
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

const shuffledWords = WORD_BANK.sort(() => Math.random() - Math.random()).join(
  " "
);

const GAME_TIME = 60;

function App() {
  const [isGameOver, setIsGameOver] = useState(false);

  const { currChar, trailingText, leadingText, typos, correctCount } =
    useTypeTest(shuffledWords, isGameOver);

  const handleGameOver = useCallback(() => {
    setIsGameOver(true);
  }, []);

  return (
    <Container>
      {isGameOver ? (
        <Statistics typos={typos} correctCount={correctCount} />
      ) : (
        <>
          <Timer seconds={GAME_TIME} onTimerEnded={handleGameOver} />
          <TypeTest
            currChar={currChar}
            trailingText={trailingText}
            leadingText={leadingText}
          />
        </>
      )}
    </Container>
  );
}

export default App;
