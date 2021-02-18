import React, { FC } from 'react';
import * as S from './DetailsProduct.styles';

type TPrice = {
  currency: string;
  amount: number;
  decimals: number;
};

interface IProps {
  title: string;
  picture: string;
  description: string;
  condition: string;
  soldQuantity: number;
  price: TPrice;
}

const DetailsProduct: FC<IProps> = ({
  picture,
  description,
  title,
  condition,
  soldQuantity,
  price: { currency, amount, decimals },
}): JSX.Element => (
  <S.Wrapper>
    <div>
      <S.Image src={picture} alt={title} />

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

      <S.Price>
        <li>{currency}</li>
        <li>{amount}</li>
        <li>{decimals}</li>
      </S.Price>

      <S.Button>Comprar</S.Button>
    </S.Infos>
  </S.Wrapper>
);

export default DetailsProduct;
