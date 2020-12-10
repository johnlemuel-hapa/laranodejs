const http = require('http')
const url = require('url')
const UserController = require('./app/controllers/userController')

function methodError(req, res) {
  res.writeHead(405, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Method Not Allowed' }))
}

let routes = {};

routes['/api/users'] = (req, res) => {
  if (req.method === 'GET') {
    UserController.getUsers(req, res)
  } else {
    methodError(req, res)
  }
}

// routes['/api/users' + new RegExp('[0-9]')] = (req, res) => {
//   console.log('wew');
// }

const server = http.createServer((req, res) => {
  // if (req.url === '/api/users' && req.method === 'GET') {
  //   UserController.getUsers(req, res)
  // } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
  //   const id = req.url.split('/')[3]
  //   UserController.getUser(req, res, id)
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'application/json' })
  //   res.end(JSON.stringify({ message: 'Route Not Found' }))
  // }

  // const requestUrl = url.parse(req.url)
  // const path = requestUrl.pathname

  // const parts = path.split('/').slice(1);

  if (routes[req.url]) {
    routes[req.url](req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: '404 | Not Found' }))
  }
})

const hostname = '127.0.0.1'
const port = 3001

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
