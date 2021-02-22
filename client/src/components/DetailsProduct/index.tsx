import React, { FC } from 'react';
import formatCurrencyPrice from '@utils/formatCurrencyPrice';

import * as S from './DetailsProduct.styles';

interface IProps {
  picture: string;
  description: string;
  title: string;
  condition: string;
  soldQuantity: number;
  priceCurrency: string;
  priceAmount: number;
  priceDecimals: number;
  onClick: () => void;
}

const DetailsProduct: FC<IProps> = ({
  picture,
  description,
  title,
  condition,
  soldQuantity,
  priceCurrency,
  priceAmount,
  priceDecimals,
  onClick,
}): JSX.Element => {
  return (
    <S.Wrapper>
      <div>
        <S.Image>
          <img src={picture} alt={title} />
        </S.Image>

        <S.Description>
          <h2>Descripción del producto</h2>
          <article>{description}</article>
        </S.Description>
      </div>

      <S.Infos>
        <S.Subtitle>
          <p>{condition}</p>
          <p>{soldQuantity} vendidos</p>
        </S.Subtitle>

        <S.Title>{title}</S.Title>
        {priceCurrency && (
          <S.Price>
            {formatCurrencyPrice(priceAmount, priceCurrency)}
            <span>{priceDecimals}</span>
          </S.Price>
        )}

        <S.Button onClick={onClick}>Comprar</S.Button>
      </S.Infos>
    </S.Wrapper>
  );
};

export default DetailsProduct;
