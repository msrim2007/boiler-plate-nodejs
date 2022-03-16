const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/user")
const config = require("./config/key")

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 몽고 DB 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connect'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})

// express.<메소드 방식>('<경로>', 함수)
app.post('/register', (req, res) => {
  // 회원 가입 시 필요한 정보를 클라이언트에서 요청받아 DB에 넣어야함
  const user = new User(req.body)

  user.save((err, doc) => {
    // 에러 발생 시
    if (err) {
      return res.json({ 
        success: false, err
      })
    }

    // 정상 진행
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})