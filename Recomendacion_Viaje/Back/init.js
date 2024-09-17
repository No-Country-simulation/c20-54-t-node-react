const express = require('express')

// routers
const { userRouter } = require('./src/routers/user.router')
const { packageRouter } = require('./src/routers/package.router')
const { carRouter } = require('./src/routers/car.router')
const { reservationRouter } = require('./src/routers/reservation.router')

// middleware
const errorMiddleware = require('./src/middlewares/errorGlobal')

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// create endpoints
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/api/v1/package", packageRouter)
app.use("/api/v1/car", carRouter)
app.use("/api/v1/reservation", reservationRouter)
app.use("/api/v1/users", userRouter)
app.use(errorMiddleware)

module.exports = app