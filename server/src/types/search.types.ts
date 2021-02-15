export interface IAuthor {
  name: string;
  lastname: string;
}

interface IPathFromRoot {
  id: string;
  name: string;
}

export interface IFilterValues {
  id: string;
  name: string;
  path_from_root: IPathFromRoot[];
}

export interface IFilter {
  id: string;
  name: string;
  type: string;
  values: IFilterValues[];
}

export interface IItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}

interface IItemShipping {
  free_shipping: boolean;
}

export interface IItemPayload {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  shipping: IItemShipping;
}

export interface IItemResponse {
  id: string;
  title: string;
  price: IItemPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
