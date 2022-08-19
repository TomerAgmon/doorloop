import { useTypeTest } from "./../hooks/useTypeTest";
import * as S from "./styled";
import { WordStates } from "./word";

interface TypeTestProps {
  words: { [key: string]: WordStates };
}

export function TypeTest({ words }: TypeTestProps) {
  const { inputText, handleKeyDown } = useTypeTest(words);

  return (
    <S.Container>
      <S.WordsContainer>
        {Object.keys(words).map((word: string) => (
          <S.StyledWord key={word} word={word} wordState={words[word]} />
        ))}
      </S.WordsContainer>
      <S.TextInput
        value={inputText}
        onChange={handleKeyDown}
        type="text"
        ref={(el) => el?.focus()}
      />
    </S.Container>
  );
}
