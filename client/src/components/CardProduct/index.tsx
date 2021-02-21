import React, { FC } from 'react';
import * as S from './CardProduct.styles';

interface IProps {
  thumbnail: string;
  priceCurrency: string;
  priceAmount: number;
  priceDecimals: number;
  title: string;
  locale: string;
}

const formatCurrency = (price: number, currency: string) =>
  new Intl.NumberFormat(navigator.language, {
    style: 'decimal',
    currency,
  }).format(price);

const CardProduct: FC<IProps> = ({
  thumbnail,
  title,
  priceCurrency,
  priceAmount,
  priceDecimals,
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
