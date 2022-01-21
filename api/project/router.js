// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')
 
router.get('/', (req, res, next) => {
  Projects.get()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    next(err)
  })
})

 
router.post('/', (req, res, next) => {
  res.json({ message: "Post!" })
  next()
})
 
module.exports = router