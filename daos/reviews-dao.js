import reviewsModel from "../models/reviews-model.js";

export const findAllReviews = () => {
    return reviewsModel.find();
};

export const findReviewsByMealId = (idMeal) => {
    return reviewsModel.find({idMeal: idMeal}).populate("user",["userName", "name", "role"]).exec();
};

export const findReviewsByUserId = (userId) => {
    return reviewsModel.find({user: userId});
};

export const createReview = (review) => {
    return reviewsModel.create(review);
};

export const deleteReview = (reviewId) => {
    return reviewsModel.deleteOne({_id: reviewId});
};

export const updateReview = (reviewId, review) => {
    return reviewsModel.updateOne({_id: reviewId}, {$set: review});
};