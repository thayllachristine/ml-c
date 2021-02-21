import { IAuthor } from './name.types';

interface IItemShipping {
  free_shipping: boolean;
}

type TTSellerAddressCity = {
  name: string;
};

type TSellerAddress = {
  city: TTSellerAddressCity;
};
export interface ISearchItemPayload {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  shipping: IItemShipping;
  seller_address: TSellerAddress;
}

export interface IItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ISearchItemResponse {
  id: string;
  title: string;
  price: IItemPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sellerCity: string;
}

export interface IDetailsItemPayload extends ISearchItemPayload {
  sold_quantity: number;
  plain_text: string;
  author: IAuthor;
}

interface IDetailsItem {
  sold_quantity: number;
  description: string;
}

export interface IDetailsItemResponse {
  author: IAuthor;
  item: IDetailsItem;
}
