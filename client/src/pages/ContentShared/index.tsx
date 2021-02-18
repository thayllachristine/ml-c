import React, { FC, ReactNode } from 'react';
import * as S from './ContentShared.styles';

import Container from '../../components/Container';
import Breadcrumb from '../../components/Breadcrumb';

interface IProps {
  children: ReactNode;
  category: string;
  product: string;
}

const ContentShared: FC<IProps> = ({
  children,
  category,
  product,
}): JSX.Element => {
  return (
    <Container>
      <Breadcrumb category={category} product={product} />
      <S.Wrapper>{children}</S.Wrapper>
    </Container>
  );
};

export default ContentShared;
