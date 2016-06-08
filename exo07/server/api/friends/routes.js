let router = require('express').Router();
let controller = require('./controller');
router.param('id',controller.param);

router.route('/')
.get(controller.get)
.post(controller.post);

router.route('/:id')
.get(controller.getOne)

module.exports = router;