const app = require('./init')
const db = require('./src/db/database')

const PackageModel = require('./src/db/models/Package')

const datas = [
  {
    "category": "hosting",
    "city": "Ciudad de Mexico",
    "title": "Palacio de bellaz artes",
    "meanID": null,
    "roomID": "66d8d9aa0f6187be56d46b58",
    "rating": 4.5,
    "priceTotal": 150,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "firstImage": "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
  {
    "category": "hosting",
    "city": "quintana roo",
    "title": "capital",
    "meanID": null,
    "roomID": "66d8d9aa0f6187be56d46b59",
    "rating": 4.5,
    "priceTotal": 300,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://www.pexels.com/es-es/foto/edificio-blanco-de-3-pisos-rodeado-de-arboles-261395/"
    ],
    "firstImage": "https://www.pexels.com/es-es/foto/edificio-blanco-de-3-pisos-rodeado-de-arboles-261395/",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
  {
    "category": "transport",
    "city": "Bajo california",
    "title": "San felipe",
    "meanID": "66d902291040c9e3bef23d83",
    "roomID": null,
    "rating": 4.5,
    "priceTotal": 80,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?t=st=1726103728~exp=1726107328~hmac=0176b4684abfa42916fa48219d5f82d9111fba79a5edce7b5430cd1953d3d7e8&w=1380"
    ],
    "firstImage": "https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?t=st=1726103728~exp=1726107328~hmac=0176b4684abfa42916fa48219d5f82d9111fba79a5edce7b5430cd1953d3d7e8&w=1380",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
  {
    "category": "transport",
    "city": "veracruz",
    "title": "Malecón de Boca del Río",
    "meanID": "66d90596a9a47b15985882eb",
    "roomID": null,
    "rating": 4.5,
    "priceTotal": 75,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?t=st=1726103728~exp=1726107328~hmac=0176b4684abfa42916fa48219d5f82d9111fba79a5edce7b5430cd1953d3d7e8&w=1380"
    ],
    "firstImage": "https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?t=st=1726103728~exp=1726107328~hmac=0176b4684abfa42916fa48219d5f82d9111fba79a5edce7b5430cd1953d3d7e8&w=1380",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
  {
    "category": "completed",
    "city": "Palenque",
    "title": "Mexico, Chiapas, Palenque",
    "meanID": "66d90596a9a47b15985882ea",
    "roomID": "66d8d9aa0f6187be56d46b58",
    "rating": 4.5,
    "priceTotal": 200,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://images.pexels.com/photos/3480390/pexels-photo-3480390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "firstImage": "https://images.pexels.com/photos/3480390/pexels-photo-3480390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
  {
    "category": "completed",
    "city": "Ciudad de Mexico",
    "title": "Palacio de bellaz artes",
    "meanID": "66d90596a9a47b15985882eb",
    "roomID": "66d8d9aa0f6187be56d46b59",
    "rating": 4.5,
    "priceTotal": 375,
    "description": {
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt fermentum augue, eget ultricies nunc accumsan non. Aenean efficitur arcu in urna facilisis tincidunt. Pellentesque eleifend eleifend tellus in semper. Vestibulum posuere porttitor velit, interdum pharetra tellus dignissim quis. Quisque iaculis lobortis egestas. In dictum placerat semper. Phasellus feugiat mi orci, vel condimentum massa pulvinar non."
    },
    "images": [
      "https://www.civitatis.com/blog/wp-content/uploads/2022/12/zocalo-ciudad-mexico-noche.jpg"
    ],
    "firstImage": "https://content.r9cdn.net/rimg/dimg/9b/2d/0aeefb46-city-53588-162aa932673.jpg?crop=true&width=1020&height=498",
    "comments": [
      {
        "userID": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
        "rating": 1.5,
        "date": "2024-09-12T01:00:10.418Z"
      }
    ]
  },
]

const insertDataToModel = async (data, model) => {
  try {
    const result = await model.insertMany(data)
    console.log('Data inserted successfully:', result)
  } catch (error) {
    console.error('Error inserting data:', error)
  }
}

// insertDataToModel(datas, PackageModel)

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