const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getCars,
    deleteCar, 
    createCar
} = require('./controller')

app.get(`/api/cars`, getCars)
app.delete(`/api/cars/:id`, deleteCar)
app.post(`/api/cars`, createCar)

app.listen(3000, () => console.log(`running on 3000`))