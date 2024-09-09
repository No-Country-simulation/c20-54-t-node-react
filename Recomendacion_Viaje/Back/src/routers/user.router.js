const express = require('express');

// controllers -> user
const { getUsers, loginUser, registerUser } = require('../controllers/user.controller');

// middleware
const validate = require('../middlewares/validateExpress');
const { registerUser: registerUserBody } = require('../middlewares/expressValidator/user.middleware');
const router = express.Router();

// routers 
router.post('/', loginUser)
router.post('/register', validate(registerUserBody), registerUser)
router.get('/:id', getUsers)


module.exports = { userRouter: router };
