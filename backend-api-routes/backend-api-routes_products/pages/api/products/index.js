import { getAllProducts } from "../../../services/productServices.js";

export default function handler(request, response) {
  // const products = getAllProducts(); // Call the function to get the data
  response.status(200).json(getAllProducts());
}
