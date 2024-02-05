import { getProductById } from "../../../services/productServices.js";

export default function handler(request, response) {
  // const products = getAllProducts(); // Call the function to get the data

  const { id } = request.query;

  response.status(200).json(getProductById(id));
}
