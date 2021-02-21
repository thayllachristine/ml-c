import React, { FC } from 'react';
import * as S from './Breadcrumb.styles';

export interface IProps {
  categories: Array<string>;
  product: string;
}

const Breadcrumb: FC<IProps> = ({ categories, product }): JSX.Element => (
  <S.Wrapper>
    <S.List>
      {categories.map((category: string) => (
        <S.Item>{category}</S.Item>
      ))}
      <S.Item>{product}</S.Item>
    </S.List>
  </S.Wrapper>
);

export default Breadcrumb;
