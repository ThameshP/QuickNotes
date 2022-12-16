const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use('/', express.static(__dirname + '/'))
const port = 3000


app.get('/', (req, res) => {
  res.sendFile("/index.html",{root: __dirname})
})

app.get('/login', (req, res) => {
  res.sendFile("/login.html",{root: __dirname})
})

app.get('/signup', (req, res) => {
  res.sendFile("/signup.html",{root: __dirname})
})

app.post('/getnotes', (req, res) => {
  const {userToken } = req.body
  res.sendFile("/signup.html", {root: __dirname})
})

app.post('/login', (req, res) => {
  const {userToken } = req.body
  res.sendFile("/signup.html", {root: __dirname})
})

app.post('/signup', (req, res) => {
  const {userToken } = req.body
  res.sendFile("/signup.html", {root: __dirname})
})

app.post('/addnotes', (req, res) => {
  const {userToken } = req.body
  res.sendFile("/signup.html", {root: __dirname})
})

app.post('/deletenotes', (req, res) => {
  const {userToken } = req.body
  res.sendFile("/signup.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost: ${port}`)
})
