let router = require('express').Router();
router.use('/friends',require('./friends/routes'));

module.exports = router;