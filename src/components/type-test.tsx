import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { WORD_BANK } from "./../word-bank";
import { useTypeTest } from "../hooks/useTypeTest";

const TestContainer = styled.div({
  display: "flex",
  height: "95%",
});

const CurrChar = styled.span({
  textDecoration: "underline",
  background: "green",
});

const LeadingText = styled.span({
  opacity: 0.7,
});

interface TypeTestProps {
  currChar: string;
  trailingText: string;
  leadingText: string;
}

export function TypeTest({
  currChar,
  trailingText,
  leadingText,
}: TypeTestProps) {
  return (
    <p>
      <LeadingText>{leadingText}</LeadingText>
      <CurrChar>{currChar}</CurrChar>
      <span>{trailingText}</span>
    </p>
  );
}
