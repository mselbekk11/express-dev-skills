var express = require('express')
var router = express.Router()
var skillsCtrl = require('../controllers/skills')

// GET /todos
router.get('/', skillsCtrl.index)
// GET /todos/new <- Define BEFORE show route
router.get('/new', skillsCtrl.new)
//  GET / todos/:id
router.get('/:id', skillsCtrl.show)

// POST /todos
router.post('/', skillsCtrl.create)

// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete)

module.exports = router
