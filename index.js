const express = require('express')
const app = express()
const port = 5000

// 몽고 DB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://boiler:plate@boilerplate.qnbhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connect'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})