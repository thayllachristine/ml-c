import React, { FC } from 'react';
import * as S from './CardProduct.styles';

type IPrice = {
  currency: string;
  amount: number;
  decimals: number;
};

interface IProps {
  thumbnail: string;
  price: IPrice;
  title: string;
  locale: string;
}

const CardProduct: FC<IProps> = ({
  thumbnail,
  title,
  price: { currency, amount, decimals },
  locale,
}): JSX.Element => (
  <S.Wrapper>
    <S.Image>
      <img src={thumbnail} alt={title} />
    </S.Image>

    <S.Content>
      <S.Price>
        <li>{currency}</li>
        <li>{amount}</li>
        <li>{decimals}</li>
      </S.Price>

      <h1>{title}</h1>
    </S.Content>

    <S.Locale>
      <p>{locale}</p>
    </S.Locale>
  </S.Wrapper>
);

export default CardProduct;
