import express from "express";
import cors from "cors";
import cookbookController from "./controllers/third-party-api-controller/cookbook-controller.js";
import usersController from "./controllers/local-data-controller/users-controller.js";
import mongoose from "mongoose";
import session from "express-session"
import likesController from "./controllers/local-data-controller/likes-controller.js";
import favoriteController from "./controllers/local-data-controller/favorite-controller.js";
import reviewController from "./controllers/local-data-controller/reviews-controller.js";

const CONNECTION_STRING =  process.env.DB_CONNECTION_STRING_PROJECT ||'mongodb://127.0.0.1:27017/cookbook'
mongoose.connect(CONNECTION_STRING);

const app = express()
let sess = {
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
};

if (process.env.ENV === 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true;
}

app.use(
    session(sess)
)


app.use(express.json());

const allowedOrigins = ['http://localhost:3000',process.env.REACT_CONNECT_URL]
app.use(cors({
                 credentials: true,
                 origin: allowedOrigins, //make it environment variable
             }
));

cookbookController(app)
usersController(app)
likesController(app)
favoriteController(app)
reviewController(app)


app.listen(process.env.PORT || 4000)