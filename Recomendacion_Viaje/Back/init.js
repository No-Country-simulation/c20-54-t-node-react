const express = require('express')

// routers
const { userRouter } = require('./src/routers/user.router')
const { packageRouter } = require('./src/routers/package.router')

// middleware
const errorMiddleware = require('./src/middlewares/errorGlobal')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// create endpoints
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/api/v1/package", packageRouter)
app.use("/api/v1/car")
app.use("/api/v1/users/", userRouter)
app.use(errorMiddleware)

module.exports = app