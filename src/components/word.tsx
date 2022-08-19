import styled from "styled-components";

enum WordStates {
  Correct,
  InProgress,
  Error,
}

interface WordProps {
  word: string;
  wordState: WordStates;
}

const WordContainer = styled.span({});

export function Word({ word, wordState }: WordProps) {
  return <WordContainer>{word}</WordContainer>;
}
