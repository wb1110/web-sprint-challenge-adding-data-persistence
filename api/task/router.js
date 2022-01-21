// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
 
router.get('/', (req, res, next) => {
    res.json({ message: "Get!" })
    next()
})
 
router.post('/', (req, res, next) => {
  res.json({ message: "Post!" })
  next()
})

module.exports = router