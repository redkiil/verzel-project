const express = require('express')
const router = express.Router();
const controllers = require('../controllers/classes')

router.get('/', controllers.show_all)
router.get('/:id', controllers.show_specific)
router.post('/', controllers.create)
router.patch('/:id', controllers.update)
router.delete('/:id', controllers.delete)

module.exports = router;