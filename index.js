const express = require('express')
const mongoose = require('mongoose')
const Note = require('./database/Note')
const User = require('./database/User')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use('/', express.static(__dirname + '/'))
const port = 3000

mongoose.connect('mongodb://localhost:27017/quicknotes')

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


app.post('/signup', async (req, res) => {
  const {userToken} = req.body
  console.log(req.body)
  let user = await User.create(req.body)
  res.status(200).json({success:true, user: user})
  res.sendFile("/signup.html", {root: __dirname})
})

app.post('/login', async (req, res) => {
  //const {userToken } = req.body
  let user = await User.findOne(req.body)
  if(!user){
    res.status(200).json({success: false, message: "No user found"})
  }
  else{
      res.status(200).json({success: true, user: {email: user.email}, message: "User found"})
  }

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
