import React from 'react';
import CardProductComponent from './index';

export default {
  component: CardProductComponent,
  title: 'Components/Card Product',
};

const props = {
  thumbnail: 'http://http2.mlstatic.com/D_670076-MLA43733561468_102020-O.jpg',
  title: 'Camiseta adidas Boca Juniors Modelo Titular Aeroready 2020',
  sellerCity: 'Buenos Aires',
  priceCurrency: 'ARS',
  priceAmount: 6989,
  priceDecimals: 0,
};

export const CardProduct = () => <CardProductComponent {...props} />;
