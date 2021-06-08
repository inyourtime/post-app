const router = require('express').Router();
const authorization = require('../middleware/authorization');
const dashboardController = require('../controllers/dashboardController');

router.get('/', authorization, dashboardController.getUsername);

module.exports = router;