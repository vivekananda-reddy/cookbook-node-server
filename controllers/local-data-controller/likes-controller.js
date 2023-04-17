import * as likesDao from './../../daos/likes-dao.js'
import {response} from "express";


const findAllLikes = async (req, res) => {
    const likes = await likesDao.findAllLikes()
    res.json(likes)
}

const findLikesByMeal = async (req, res) => {
    const likes = await likesDao.findLikesByMealId(req.params.mid)
    res.json(likes)
}

const findLikesByUser = async (req, res) => {
    const likes = await likesDao.findLikesByUserId(req.params.uid)
    res.json(likes)
}

const createLikes = async (req, res) => {
    const request = req.body
    const currentUser = req.session["currentUser"]
    console.log(currentUser)
    if (!currentUser) {
        res.sendStatus(403)
        return
    }
    const like= {
        ...request,
        user:req.session["currentUser"]._id,
        role: req.session["currentUser"].role
    }
    const createdLike = await likesDao.createLike(like)
    res.json(createdLike)

}

const deleteLikes = async (req, res) => {
    const mealId = req.params.mid
    const currentUser = req.session["currentUser"]
    if (!currentUser) {
        res.sendStatus(403)
        return
    }
    const status = await likesDao.deleteLike(mealId, currentUser._id)
    res.sendStatus(200)
}

const likesController = (app) => {
    app.get('/api/likes', findAllLikes)
    app.get('/api/users/:uid/likes', findLikesByUser)
    app.get('/api/meal/:mid/likes', findLikesByMeal)
    app.post('/api/meal/:mid/likes', createLikes )
    app.delete('/api/meal/:mid/likes', deleteLikes )
}


export default likesController;