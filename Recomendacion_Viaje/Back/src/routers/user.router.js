const express = require('express');

// controllers -> user
const { getUser, loginUser, registerUser } = require('../controllers/user.controller');

// middleware
const validate = require('../middlewares/validateExpress');
const { registerUser: registerUserBody, loginUser: loginUserBody } = require('../middlewares/expressValidator/user.middleware');
const router = express.Router();

// routers 
router.post('/', validate(loginUserBody), loginUser)
router.post('/register', validate(registerUserBody), registerUser)
router.get('/:id', getUser)


module.exports = { userRouter: router };
