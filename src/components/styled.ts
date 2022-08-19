import styled from "styled-components";
import Word, { WordStates } from "./word";

export const WordsContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "1%",
});

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  gap: "2rem",
});

export const StyledWord = styled(Word)(({ wordState }) => ({
  backgroundColor: wordState === WordStates.Error ? "red" : "unset",
  opacity: wordState === WordStates.Correct ? 0.7 : 1,
  textDecoration: wordState === WordStates.InProgress ? "underline" : "unset",
}));

export const TextInput = styled.input({
  width: "50%",
  height: "3rem",
  fontSize: "1.5rem",
});
