import express from "express";
import cors from "cors";
import cookbookController from "./controllers/third-party-api-controller/cookbook-controller.js";
import usersController from "./controllers/local-data-controller/users-controller.js";
import mongoose from "mongoose";


const CONNECTION_STRING =  'mongodb://127.0.0.1:27017/cookbook' || process.env.DB_CONNECTION_STRING_PROJECT
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json());
app.use(cors());

cookbookController(app)
usersController(app)

app.listen(process.env.PORT || 4000)