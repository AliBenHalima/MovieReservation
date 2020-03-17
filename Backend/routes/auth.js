const express = require('express');
const router = express.Router();

const loginController = require('../Controller/login');
const isAuth = require('../Controller/router_protector');

router.post('/api/signUp',loginController.signUp);
router.post('/api/signIn',loginController.signIn);
router.post('/try',isAuth,loginController.NewUser);

module.exports = router;
