require('dotenv').config()
const express = require('express')
// import { Express } from 'express'
const app = express()
const port = 3000
const jsonData= [{
  user : "narendra"
}]
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
  res.json(jsonData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
