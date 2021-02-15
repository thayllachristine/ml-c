import {
  IDetailsItemPayload,
  IDetailsItemResponse,
} from '../types/items.types';

import { getAuthor } from './name.mapper';
import { getItems } from './items.mapper';

const detailsMapper = (item: IDetailsItemPayload): IDetailsItemResponse => ({
  author: getAuthor(),
  item: {
    ...getItems(item),
    sold_quantity: item.sold_quantity,
    description: item.plain_text,
  },
});

export default detailsMapper;
