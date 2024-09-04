const express = require('express')

// routers
const userRouter = require('./src/routers/user.router')

// middleware
const errorMiddleware = require('./src/middlewares/errorGlobal')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/", () => {
  console.log("hello")
})
app.use("/api/v1/users/", userRouter)
app.use(errorMiddleware)

module.exports = app