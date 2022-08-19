import styled from "styled-components";

const StatisticsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

interface StatisticsProps {
  typos: number;
  correctCount: number;
}

export function Statistics({ typos, correctCount }: StatisticsProps) {
  return (
    <StatisticsContainer>
      <span>Typos: {typos}</span>
      <span>Correct words: {correctCount}</span>
    </StatisticsContainer>
  );
}
