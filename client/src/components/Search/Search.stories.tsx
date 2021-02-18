import React from 'react';
import SearchComponent from './index';

export default {
  component: SearchComponent,
  title: 'Components/Search',
};

const props = {
  onChange: () => console.log('onChange'),
  value: '',
};

export const Search = () => <SearchComponent {...props} />;
