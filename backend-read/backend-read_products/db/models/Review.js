import mongoose from "mongoose";
import dbConnect from "../connect";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: {
    type: String, // 'String' should be capitalized
    required: true, // 'true' should be lowercase
  },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
