import dbConnect from "@/db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      // const product = await Product.findOne({ _id: id });
      // or we can use const product = await Product.findById(id)
      const product = await Product.findById(id).populate("reviews");
      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      response.status(500).json({ status: "Internal Server Error" });
    }
  }
}
