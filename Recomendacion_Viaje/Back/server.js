const app = require('./init')
const db = require('./src/db/database')


const startServer = () => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    db().then(() => {
      console.log('Connected to database')
    }).catch((error) => {
      console.log(error)
    })
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()