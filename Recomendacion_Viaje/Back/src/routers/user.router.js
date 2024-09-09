const express = require('express');

// controllers -> user
const { getUsers, loginUser } = require('../controllers/user.controller');

const router = express.Router();

// routers 
router.post('/', loginUser)
router.get('/:id', getUsers)


module.exports = { userRouter: router };
