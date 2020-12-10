const users = require('../../database/data/users.json')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id)
    resolve(user)
  })
}

module.exports = {
  findAll,
  findById
}
