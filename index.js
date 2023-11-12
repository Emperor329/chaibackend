require('dotenv').config()
const express = require('express')
// import { Express } from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=> {
  res.send('Welocome, emperor')
})

app.get('/login', (req,res)=> {
  res.send('<h1>Please Enter your Credentials <h1/>')
})

app.get('/testlink', (req,res)=> {
  res.links({
    next: 'http://api.example.com/users?page=2',
    last: 'http://api.example.com/users?page=5'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
