import { memo } from "react";

export enum WordStates {
  Correct,
  InProgress,
  Error,
  Pending,
}

interface WordProps {
  word: string;
  wordState?: WordStates;
  className?: string;
}

function Word({ className, word, wordState }: WordProps) {
  return <span className={className}>{word}</span>;
}

export default memo(Word);
