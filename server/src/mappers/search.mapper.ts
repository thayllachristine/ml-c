import { getAuthor } from './name.mapper';
import { getItems } from './items.mapper';

import { IFilter, IFilterValues } from '../types/search.types';
import { ISearchItemPayload } from '../types/items.types';

const getCategories = (data: any): string[] | [] => {
  const categoryFilter = data.filters.find(
    (filter: IFilter) => filter.id === 'category',
  );

  return categoryFilter
    ? categoryFilter.values.map((filter: IFilterValues) => filter.name)
    : [];
};

const searchMapper = (data: any) => ({
  author: getAuthor(),
  categories: getCategories(data),
  items: data.results.map((d: ISearchItemPayload) => getItems(d)),
});

export default searchMapper;
