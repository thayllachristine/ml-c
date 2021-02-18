import React from 'react';
import CardProductComponent from './index';

export default {
  component: CardProductComponent,
  title: 'Components/Card Product',
};

const props = {
  thumbnail: 'http://http2.mlstatic.com/D_670076-MLA43733561468_102020-O.jpg',
  title: 'Camiseta adidas Boca Juniors Modelo Titular Aeroready 2020',
  locale: 'Buenos Aires',
  price: {
    currency: 'ARS',
    amount: 6989,
    decimals: 0,
  },
};

export const CardProduct = () => <CardProductComponent {...props} />;
