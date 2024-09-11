const app = require('./init')
const db = require('./src/db/database')

const Room = require('./src/db/models/Room')

const datas = [
  {
    "roomName": "Suite Presidencial",
    "hostingID": "66d8d71652f67b83d07a38f7",
    "roomType": "Suite",
    "roomPrice": 350,
    "beds": "1 Cama King",
    "status": "active"
  }, {
    "roomName": "Habitación Doble Deluxe",
    "hostingID": "66d8d71652f67b83d07a38fe",
    "roomType": "Doble",
    "roomPrice": 220,
    "beds": "2 Camas Queen",
    "status": "active"
  },
  {
    "roomName": "Dormitorio Compartido",
    "hostingID": "66d8d71652f67b83d07a38fd",
    "roomType": "Compartido",
    "roomPrice": 25,
    "beds": "8 Camas Individuales",
    "status": "active"
  }
  ,
  {
    "roomName": "Cabaña Romántica",
    "hostingID": "66d8d71652f67b83d07a38fb",
    "roomType": "Cabaña",
    "roomPrice": 150,
    "beds": "1 Cama Queen",
    "status": "active"
  },
  {
    "roomName": "Habitación Privada",
    "hostingID": "66d8d71652f67b83d07a38f9",
    "roomType": "Privada",
    "roomPrice": 50,
    "beds": "1 Cama Doble",
    "status": "active"
  },
  {
    "roomName": "Habitación Estándar",
    "hostingID": "66e1e83476773e6d3bb2ff60",
    "roomType": "Estándar",
    "roomPrice": 200,
    "beds": "2 Camas Dobles",
    "status": "active"
  },
  {
    "roomName": "Habitación Superior",
    "hostingID": "66d8d71652f67b83d07a38f8",
    "roomType": "Superior",
    "roomPrice": 300,
    "beds": "1 Cama Queen",
    "status": "active"
  }
]

const insertDataToModel = async (data, model) => {
  model.insertMany(data)
    .then(() => {
      console.log('Data inserted successfully')
    })
    .catch((error) => {
      console.log('Error inserting data: ', error)
    })
}
// insertDataToModel(datas, Room)

const startServer = () => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    db().then(() => {
      console.log('Connected to database')
    }).catch((error) => {
      console.log('error en la base de datos: ', error)
    })
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()