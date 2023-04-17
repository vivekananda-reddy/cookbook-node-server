import * as usersDao from './../../daos/users-dao.js'

const findFavoritesByMeal = async (req, res) => {
    const users = await usersDao.findUsersByFavorite(req.params.mid)
    res.json(users)
}

const updateFavoriteMeal = async (req,res) => {
    const currentUser = req.session["currentUser"]
    if(!(currentUser && currentUser.role !== "user")) {
        res.sendStatus(403)
        return
    }
    const status = await usersDao.updateUserFavorite(currentUser._id, req.params.mid)
    if(status.modifiedCount > 0) {
        req.session["currentUser"].favorite = req.params.mid
    }
    res.sendStatus(200)
}

const deleteFavoriteMeal = async (req,res) => {
    const currentUser = req.session["currentUser"]
    if (!(currentUser && currentUser.role !== "user")) {
        res.sendStatus(403)
        return
    }
    const status = await usersDao.updateUserFavorite(currentUser._id, null)
    if (status.modifiedCount > 0) {
        req.session["currentUser"].favorite = null
    }
    res.sendStatus(200)
}


 const favoriteController = (app) => {
    app.get('/api/meal/:mid/favorites', findFavoritesByMeal)
    app.put('/api/meal/:mid/favorites', updateFavoriteMeal)
    app.delete('/api/meal/:mid/favorites', deleteFavoriteMeal)
}

export default favoriteController;