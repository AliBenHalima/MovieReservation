const express = require('express');
const router = express.Router();

const loginController = require('../Controller/login');
// const UserCrudController = require('../Controller/UserCruds');
const Security = require('../Controller/router_protector');

router.post('/api/signUp',loginController.signUp);
router.post('/api/signIn',loginController.signIn);
router.post('/api/changeRole',loginController.changeRole);
router.post('/try',Security.checkAuth,loginController.NewUser);

module.exports = router;
