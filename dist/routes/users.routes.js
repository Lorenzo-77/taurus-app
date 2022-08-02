"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/users.controller'),
    renderSignUpFrom = _require2.renderSignUpFrom,
    renderSigninFrom = _require2.renderSigninFrom,
    signup = _require2.signup,
    signin = _require2.signin,
    logout = _require2.logout;
/*
router.get('/users/signup', renderSignUpFrom);
router.post('/users/signup', signup);
*/


router.get('/users/signin', renderSigninFrom);
router.post('/users/signin', signin);
router.get('/users/logout', logout);
module.exports = router;