import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

interface TimerProps {
  seconds: number;
  onTimerEnded: () => void;
}

const TimerContainer = styled.div({
  border: "1px solid black",
  margin: "0.5rem",
  padding: "0.5rem",
  background: "blue",
  color: "white",
  fontSize: "2rem",
});

let date = new Date();

export function Timer({ seconds, onTimerEnded }: TimerProps) {
  const [currTime, setCurrTime] = useState(seconds);

  useEffect(() => {
    let timer: NodeJS.Timer | undefined;
    if (currTime > 0) {
      timer = setInterval(() => {
        let current = new Date();
        const s = (+current - +date) % 100000;
        const newTime = Math.floor(s / 1000) % 60;

        setCurrTime(seconds - newTime);
      }, 1000);
    } else {
      onTimerEnded();
    }

    return () => clearInterval(timer);
  }, [currTime, onTimerEnded, seconds]);

  return <TimerContainer>Time: {currTime}</TimerContainer>;
}
