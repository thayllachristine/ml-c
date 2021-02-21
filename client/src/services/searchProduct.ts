const options = { method: 'GET' };

const searchProducts = async (name: string) => {
  const response = await fetch(
    `http://localhost:3001/api/items?q=${name}`,
    options,
  );

  const { items, categories } = await response.json();

  return { products: items, breadcrumbs: categories };
};

export default searchProducts;
