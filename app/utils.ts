export const getProducts = async () => {
  try {
    const res = await fetch(`${getEnvVariable("BASE_URL")}/api/items/`);
    const products = await res.json();
    return products?.data;
  } catch (error) {
    console.log({ productserror: error });
  }
};

export const getEnvVariable = (key: string) => {
  return process.env[key];
};
