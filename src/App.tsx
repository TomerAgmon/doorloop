import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { Statistics } from "./components/statistics";
import { Timer } from "./components/timer";
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

const GAME_TIME = 10;

function App() {
  const { currChar, trailingText, leadingText, typos, correctCount } =
    useTypeTest(shuffledWords);

  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <Container>
      {!isGameOver && (
        <Timer seconds={GAME_TIME} onTimerEnded={() => setIsGameOver(true)} />
      )}
      {isGameOver ? (
        <Statistics typos={typos} correctCount={correctCount} />
      ) : (
        <TypeTest
          currChar={currChar}
          trailingText={trailingText}
          leadingText={leadingText}
        />
      )}
    </Container>
  );
}

export default App;
