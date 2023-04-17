import mongoose from "mongoose";
import likesSchema from "../schemas/likes-schema.js";

const likesModel = mongoose.model("likes", likesSchema)

export default likesModel;