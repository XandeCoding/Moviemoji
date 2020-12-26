const UserController = require('../controllers/userController')

const userRouter = [];

userRouter.push({
  method: 'POST',
  path: '/users',
  handler: async (req, res) => {
    const { payload } = req

    return res.response(await UserController.insertUser(payload));
  }
})

userRouter.push({
  method: 'GET',
  path: '/users/{id}',
  handler: async (req, res) => {
    const { id } = req.params;

    return res.response(await UserController.getUser(id)).code(200)
  }
})

userRouter.push({
  method: 'DELETE',
  path: '/users/{id}',
  handler: async (req, res) => {
    const { id } = req.params;

    return res.response(await UserController.deleteUser(id)).code(200)
  }
})

userRouter.push({
  method: 'PUT',
  path: '/users/{id}',
  handler: async (req, res) => {
    const { id } = req.params;
    const { payload } = req
    
    return res.response(await UserController.updateUser(id, payload));
  }
})

module.exports = userRouter
