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
    console.log(newUser)
    const userExists = await usersDao.findUserByUserName(newUser.userName)
    console.log(userExists)
    if (userExists !== null) {
        res.send({
            error: "User Name already exists"
        })
        return;
    }
    const registeredUser = await usersDao.createUser(newUser);
    res.json(registeredUser)
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.json(status)
}

const usersController = (app) => {
    app.get('/api/users', findAllUsers)
    app.get('/api/users/:uid', findUserId)
    app.post('/api/users', createUser)
    app.delete('/api/users/:uid', deleteUser)
}



export default usersController;