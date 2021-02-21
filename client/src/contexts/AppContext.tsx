import React, { FC, ReactNode, useState } from 'react';

import ContextType, { IData, IProducts } from './AppContext.types';

interface IProps {
  children: ReactNode;
}

const DATA_INITIAL_VALUE: IData = {
  products: [],
  breadcrumbs: [],
};

export const CONTEXT_INITIAL_VALUE: ContextType = {
  data: {
    products: [],
    breadcrumbs: [''],
  },
  setSearchResult: () => null,
};

const AppContext = React.createContext<ContextType>(CONTEXT_INITIAL_VALUE);

const AppProvider: FC<IProps> = ({ children }) => {
  const [data, setData] = useState<IData>(DATA_INITIAL_VALUE);

  const setSearchResult = (
    breadcrumbs: Array<string> | [],
    products: IProducts[],
  ): void => {
    setData({ ...data, breadcrumbs, products });
  };

  return (
    <AppContext.Provider value={{ data, setSearchResult }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
