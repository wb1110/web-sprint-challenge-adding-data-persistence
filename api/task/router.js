// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')
 
router.get('/', (req, res, next) => {
  Tasks.get()
  .then(tasks => {
    res.status(200).json(tasks)
  })
  .catch(err => {
    next(err)
  })
})

 
router.post('/', (req, res, next) => {
  Tasks.create(req.body)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    next(err)
  })
})
 
module.exports = router