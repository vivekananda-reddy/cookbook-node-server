import mongoose from 'mongoose';

const likesSchema = new mongoose.Schema(
    {
        idMeal: {type:String, required:true},
        strMeal: {type:String, required:true},
        strMealThumb: {type:String, required:true},
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        role: {type:String, required:true},
        createdAt : {type: Date, default: Date.now()}

    }, {collection: 'likes'});
export default likesSchema;