const options = { method: 'GET' };

const detailsProduct = async (id: string) => {
  const response = await fetch(
    `http://localhost:3001/api/items/${id}`,
    options,
  );

  const { item } = await response.json();

  return item;
};

export default detailsProduct;
