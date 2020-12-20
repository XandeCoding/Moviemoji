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
  path: '/users/{id?}',
  handler: async () => { return 'teste' }
})

userRouter.push({
  method: 'DELETE',
  path: '/users/{id}',
  handler: async () => { return 'teste' }
})

userRouter.push({
  method: 'PUT',
  path: '/users/{id}',
  handler: async () => { return 'teste' }
})

module.exports = userRouter
