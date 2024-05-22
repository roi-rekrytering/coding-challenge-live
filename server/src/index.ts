import express from 'express'
import userRouter from './features/user'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// Handle json body parsing
// Why is this not a default in express package? :(
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})