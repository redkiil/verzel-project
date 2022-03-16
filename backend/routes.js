
const express = require('express')

const modules_routes = require('./routes/modules')
const classes_routes = require('./routes/classes')
const login_routes = require('./routes/login')

const router = express.Router()


router.use('/modules', modules_routes)
router.use('/classes', classes_routes)
router.use('/login', login_routes)

module.exports = router;