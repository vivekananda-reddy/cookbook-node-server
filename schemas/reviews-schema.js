import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        reviewText: {type: String},
        idMeal: {type: String},
        strMeal: {type:String, required:true},
        strMealThumb: {type:String, required:true},
        createdAt: {type: Date, default: Date.now()},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
    },
    {collection: "reviews"}
);

export default reviewsSchema;