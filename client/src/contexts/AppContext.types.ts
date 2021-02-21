interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
  full: number;
}

export interface IProducts {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  locale: string;
}

export interface IData {
  products: IProducts[];
  breadcrumbs: Array<string> | [];
}

interface ContextType {
  data: IData;
  setSearchResult: (breadcrumbs: Array<string>, products: IProducts[]) => void;
}

export default ContextType;
