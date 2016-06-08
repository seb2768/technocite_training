let router = require('express').Router();
let controller = require('./controller');

router.route('/')
.get(controller.get)
.post(controller.post);

router.route('/:id')
.put(controller.put)
.delete(controller.delete);


module.exports = router;