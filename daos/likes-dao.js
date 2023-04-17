import likesModel from "../models/likes-model.js";


export const findAllLikes = () => {
    return likesModel.find()
}
export const findLikesByUserId = (userId) => {
    return likesModel.find({user:userId})
}

export const findLikesByUserRole = (userRole) => {
    return likesModel.find({role:userRole})
}

export const findLikesByMealId = (mealId) => {
    return likesModel.find({idMeal:mealId})
}

export const findLikesByUserIdMealId = (userId, mealId) => {
    return likesModel.find({user:userId,idMeal:mealId})
}

export const createLike = (like) => {
    return likesModel.create(like)
}

export const deleteLike = (idMeal, userId) => {
    return likesModel.deleteOne({idMeal: idMeal, user: userId})
}