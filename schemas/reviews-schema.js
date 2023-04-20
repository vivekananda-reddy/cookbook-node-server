import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        reviewText: {type: String},
        mealId: {type: String},
        strMeal: {type:String, required:true},
        strMealThumb: {type:String, required:true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
    },
    {collection: "reviews"}
);

export default reviewsSchema;