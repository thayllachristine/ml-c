import React, { FC, ChangeEvent, useState, KeyboardEvent } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './Search.styles';

const Search: FC = (): JSX.Element => {
  const [value, setValue] = useState('');

  const history = useHistory();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const v = e.target.value;
    setValue(v);
  };

  const handleOnKeyDown = (e: KeyboardEvent): void => {
    if (e.keyCode !== 13 || !value.trim()) return;
    history.push(`/items?search=${value}`);
  };

  const handleOnClick = (): void => {
    history.push(`/items?search=${value}`);
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.Link to="/">
          <S.Logo
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__small@2x.png"
            alt="Mercado Libre"
          />
        </S.Link>

        <label htmlFor="inputSearch" />
        <S.Input
          id="inputSearch"
          type="text"
          placeholder="Nunca dejes de buscar"
          value={value}
          onChange={e => handleOnChange(e)}
          onKeyDown={e => handleOnKeyDown(e)}
        />
        <S.Icon onClick={handleOnClick}>
          <img src="/assets/search.svg" alt="search icon" />
        </S.Icon>
      </S.Content>
    </S.Wrapper>
  );
};

export default Search;
