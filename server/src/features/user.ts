import express from 'express'
import { User } from '../types'

const router = express.Router()

const users: User[] = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]

router.get('/user', (req, res) => {
  res.status(200).send(users)
})

router.get('/user/:name', (req, res) => {
  // Find the user with the given name
  // Return the user object to client if found
  // Otherwise return 404 Not Found
})

router.post('/user', (req, res) => {
  // Add a new user to the list
  // Validate that fields are correct, only allow name and age
  // Return the user object on success
  // Otherwised return 400 Bad Request
})

export default router