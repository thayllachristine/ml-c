import fetch from 'node-fetch';
import detailsMapper from '../mappers/details.mapper';

export const getDetails = async (id: string) => {
  const endpoint = `${process.env.BASE_API_URL}/items`;
  const endpointWithId = `${endpoint}/${id}`;

  const responseProduct = await fetch(endpointWithId);
  const resultProduct = await responseProduct.json();

  const responseDescription = await fetch(`${endpointWithId}/description`);
  const resultDescription = await responseDescription.json();

  const mapperResult = detailsMapper({
    ...resultProduct,
    ...resultDescription,
  });

  return mapperResult;
};
