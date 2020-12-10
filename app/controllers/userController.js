const User = require('../models/user')

/**
 * @description Get All Users
 * @route GET /api/users
 * @param req
 * @param res
 */
async function getUsers(req, res) {
  try {
    const users = await User.findAll()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
  } catch (error) {
    console.log(error) 
  }
}

/**
 * @description Get User by Id
 * @route GET /api/user/:id
 * @param req
 * @param res
 * @param id
 */
async function getUser(req, res, id) {
  try {
    const user = await User.findById(id)

    if (!user) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: '404 | Not Found' }))
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(user))
    }
  } catch (error) {
    console.log(error) 
  }
}

module.exports = {
  getUsers,
  getUser
}
