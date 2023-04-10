import express from "express";
import cors from "cors";
import cookbookController from "./controllers/third-party-api-controller/cookbook-controller.js";

const app = express()
app.use(express.json());
app.use(cors());

cookbookController(app)

app.listen(process.env.PORT || 4000)