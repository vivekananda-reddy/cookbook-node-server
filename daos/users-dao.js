import usersModel from "../models/users-model.js";

export const findAllUsers =  () => {
    return usersModel.find();
}


export const findUserById =  (userId) => {
    return usersModel.findOne({_id : userId});
}

export const findUserByUserName =  (userName) => {
    return usersModel.findOne({userName : userName});
}

export const findUserByCredentials = (userCred) => {
    return usersModel.findOne({userName: userCred.userName, password: userCred.password})
}

export const createUser = (user) => {
    return usersModel.create(user)
}

export const deleteUser = (userId) => {
    return usersModel.deleteOne({_id: userId})
}