import { ISearchItemPayload, ISearchItemResponse } from '../types/items.types';

export const getItems = (item: ISearchItemPayload): ISearchItemResponse => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: Math.floor(item.price),
    decimals: parseFloat((item.price % 1).toFixed(2)),
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  sellerCity: item.seller_address.city.name,
});
