const BASEURL = "https://learn-next-3lbf-zeeshan-web-developer.vercel.app";
export const getProducts = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/items/`);
    const products = await res.json();
    return products?.data;
  } catch (error) {
    console.log({ productserror: error });
  }
};
