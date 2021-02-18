import React, { FC, ChangeEvent } from 'react';
import * as S from './Search.styles';

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => string | void;
  value: string;
}

const Search: FC<IProps> = ({ onChange, value }): JSX.Element => (
  <S.Navbar>
    <S.Logo
      src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__small@2x.png"
      alt="Mercado Libre"
    />

    <div>
      <label htmlFor="inputSearch" />
      <S.Input
        id="inputSearch"
        type="text"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={onChange}
      />
      <S.Icon>
        <img src="/assets/search.svg" alt="search icon" />
      </S.Icon>
    </div>
  </S.Navbar>
);

export default Search;
