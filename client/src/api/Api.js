import axios from "axios";

export async function Products() {
  const product = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return product;
}
