import React from 'react';
import DetailsProductComponent from './index';

export default {
  component: DetailsProductComponent,
  title: 'Components/Details Product',
};

// "free_shipping": true,
const props = {
  picture: 'http://http2.mlstatic.com/D_670076-MLA43733561468_102020-O.jpg',
  description:
    'Equipment Sport - Tienda de Artículos Deportivos\n\nCamiseta Adidas Modelo Boca Juniors Titular 2020\n\nModelo con tecnología Aeroready\n\nPunto de venta oficial Adidas desde hace más de 45 años.\n\nEmitimos Factura A y B.\n\nEnvíos a todo el país (excepto provincia de Tierra del Fuego) a través de Mercado Envíos.\n\nPuedes retirar personalmente por nuestro local de Capital Federal, en el barrio de Villa Urquiza.\n\nDías y horarios de atención en nuestro local:\n\nLunes a Viernes: 11 a 14 y 15 a 18 horas.\n\nCódigo del Artículo: GL4175',
  soldQuantity: 280,
  condition: 'new',
  title: 'Camiseta adidas Boca Juniors Modelo Titular Aeroready 2020 ',
  priceCurrency: 'ARS',
  priceAmount: 6989,
  priceDecimals: 90,
  onClick: () => {},
};

export const DetailsProduct = () => <DetailsProductComponent {...props} />;
