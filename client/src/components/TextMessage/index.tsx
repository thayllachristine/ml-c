import React, { FC } from 'react';
import * as S from './TextMessage.styles';

interface IProps {
  text: string;
}

const TextMessage: FC<IProps> = ({ text }): JSX.Element => (
  <S.Wrapper>
    <h1>{text}</h1>
  </S.Wrapper>
);

export default TextMessage;
