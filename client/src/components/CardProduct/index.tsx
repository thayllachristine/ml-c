import React, { FC } from 'react';
import formatCurrencyPrice from '@utils/formatCurrencyPrice';
import * as S from './CardProduct.styles';

interface IProps {
  thumbnail: string;
  priceCurrency: string;
  priceAmount: number;
  priceDecimals: number;
  title: string;
  sellerCity: string;
}

const CardProduct: FC<IProps> = ({
  thumbnail,
  title,
  priceCurrency,
  priceAmount,
  priceDecimals,
  sellerCity,
}): JSX.Element => (
  <S.Wrapper>
    <S.Image>
      <img src={thumbnail} alt={title} />
    </S.Image>

    <S.Content>
      <S.Price>
        {priceCurrency} {formatCurrencyPrice(priceAmount, priceCurrency)}{' '}
        <span>{priceDecimals}</span>
      </S.Price>

      <h1>{title}</h1>
    </S.Content>

    <S.Locale>
      <p>{sellerCity}</p>
    </S.Locale>
  </S.Wrapper>
);

export default CardProduct;
