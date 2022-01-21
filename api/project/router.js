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
  Projects.create(req.body)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    next(err)
  })
})
 
module.exports = router