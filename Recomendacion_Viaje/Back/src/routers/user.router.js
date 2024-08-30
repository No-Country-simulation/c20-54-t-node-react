const express = require('express');

// controllers -> user
const { getUsers } = require('../controllers/user.controller');

const router = express.Router();

// routers 

router.get('/:id', getUsers)


module.exports = { userRouter: router };
