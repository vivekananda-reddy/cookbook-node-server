import * as usersDao from './../../daos/users-dao.js'

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers()
    res.json(users)
}

const findUserId = async (req, res) => {
    const userId = req.params.uid
    const user = await usersDao.findUserById(userId)
    if(user) {
        res.json(user)
    }
    else {
        res.sendStatus(404)
    }
}

const createUser = async (req,res) => {
    const newUser = req.body;
    const userExists = await usersDao.findUserByUserName(newUser.userName)
    if (userExists !== null) {
        res.sendStatus(409)
        return
    }
    const registeredUser = await usersDao.createUser(newUser);
    req.session["currentUser"] = registeredUser;
    res.json(registeredUser)
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.json(status)
}


const loginUser = async (req,res) => {
    const userCred = req.body;
    const user = await usersDao.findUserByCredentials(userCred);
    if(!user) {
        res.sendStatus(404)
        return
    }
    req.session["currentUser"] = user;
    res.json(user)
}

const currentProfile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(404);
        return;
    }
    res.json(currentUser);

}

const logoutUser = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
}

const usersController = (app) => {
    app.get('/api/users', findAllUsers)
    app.get('/api/users/profile/:uid', findUserId)
    app.post('/api/users', createUser)
    app.delete('/api/users/:uid', deleteUser)
    app.post('/api/users/login', loginUser)
    app.post('/api/users/profile', currentProfile)
    app.post('/api/users/logout', logoutUser)
}



export default usersController;