import React, { FC } from 'react';
import * as S from './Breadcrumb.styles';

export interface IProps {
  breadcrumbs: Array<string>;
}

const Breadcrumb: FC<IProps> = ({ breadcrumbs }): JSX.Element => (
  <S.Wrapper>
    <S.List>
      {breadcrumbs.map((breadcrumb: string, id: number) => (
        <S.Item key={id}>{breadcrumb}</S.Item>
      ))}
    </S.List>
  </S.Wrapper>
);

export default Breadcrumb;
