import * as reviewsDao from "../../daos/reviews-dao.js";

const findAllReviews = async (req, res) => {
    const reviews = await reviewsDao.findAllReviews();
    res.json(reviews);
}

const findReviewsByMealId = async (req, res) => {
    const mealId = req.params.mealId;
    const reviews = await reviewsDao.findReviewsByMealId(mealId);
    res.json(reviews)
}

const findReviewsByUserId = async (req, res) => {
    const reviews = await reviewsDao.findReviewsByUserId(req.params.uid)
    res.json(reviews)
}

const createReview = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(403)
        return
    }
    const newReview = {
        ...req.body,
        user: currentUser._id
    }
    const createdReview = await reviewsDao.createReview(newReview);
    res.json(createdReview)
}

const updateReview = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(403)
        return
    }
    const reviewId = req.params.reviewId;
    const updatedReview = req.body
    const status = await reviewsDao.updateReview(reviewId, updatedReview);
    res.sendStatus(status)
}

const deleteReview = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(403)
        return
    }
    const reviewId = req.params.reviewId;
    const status = await reviewsDao.deleteReview(reviewId)
    res.sendStatus(status)
}


const reviewController = (app) => {
    app.get("/api/reviews", findAllReviews);
    app.get("/api/meal/:mealId/reviews", findReviewsByMealId);
    app.get("/api/users/:uid/reviews", findReviewsByUserId);
    app.post("/api/reviews", createReview);
    app.put("/api/reviews/:reviewId", updateReview);
    app.delete("/api/reviews/:reviewId", deleteReview);
};

export default reviewController;