import React, { FC, ReactNode } from 'react';
import Wrapper from './Container.styles';

interface IProps {
  children: ReactNode;
}
const Container: FC<IProps> = ({ children }) => (
  <Wrapper>
    <div>{children}</div>
  </Wrapper>
);

export default Container;
