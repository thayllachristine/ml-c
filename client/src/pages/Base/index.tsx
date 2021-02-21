import React, { FC, ReactNode } from 'react';

import Container from '@components/Container';
import Breadcrumb from '@components/Breadcrumb';

import * as S from './Base.styles';

interface IProps {
  children: ReactNode;
  breadcrumbs: Array<string>;
}

const Base: FC<IProps> = ({ children, breadcrumbs }): JSX.Element => (
  <Container>
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <S.Wrapper>{children}</S.Wrapper>
  </Container>
);

export default Base;
