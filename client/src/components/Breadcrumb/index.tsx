import React, { FC } from 'react';
import * as S from './Breadcrumb.styles';

export interface IProps {
  category: string;
  product: string;
}

const Breadcrumb: FC<IProps> = ({ category, product }): JSX.Element => (
  <S.Wrapper>
    <S.List>
      <S.Item>{category}</S.Item>
      <S.Item>{product}</S.Item>
    </S.List>
  </S.Wrapper>
);

export default Breadcrumb;
