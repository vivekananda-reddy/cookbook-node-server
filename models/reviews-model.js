import mongoose from "mongoose";
import reviewsSchema from "../schemas/reviews-schema.js";
const reviewsModel = mongoose.model("reviews", reviewsSchema);

export default reviewsModel;