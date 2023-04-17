import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
    {
            userName: {type:String, unique: true, required:true},
            password: {type:String, required:true},
            role: {type:String, default: "user", enum: ["admin", "chef", "user"]},
            name: {type:String, required:true},
            email: {type:String, required:true},
            category: {type:String, required:true},
            favorite: {type:String}

    }, {collection: 'users'});
export default usersSchema;