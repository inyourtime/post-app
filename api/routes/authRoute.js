const router = require('express').Router();
const authController = require('../controllers/authController')
const authorization = require('../middleware/authorization');
const validInfo = require('../middleware/validinfo')

router.post('/register', validInfo, authController.handlerRegister);

router.post('/login', validInfo, authController.handlerLogin);

router.get('/is-verify', authorization, authController.isVerify);

router.get('/logout', authController.handlerLogout);

module.exports = router;