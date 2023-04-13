const cars = require('./db.json')
let globalId = 2

module.exports = {
    getCars: (req, res) => {
        res.status(200).send(cars)
    },

    deleteCar: (req, res) => {
        let index = cars.findIndex(elem => elem.id === +req.params.id)
        cars.splice(index, 1)
        res.status(200).send(cars)
    },

    createCar: (req, res) => {
        let { carName, worth, topSpeed, horsePower, brand, transmission, driveTrain, imageURL } = req.body
        let newCar = {
            id: globalId,
            carName, 
            worth,
            topSpeed,
            horsePower,
            brand,
            transmission,
            driveTrain,
            imageURL
        }
        cars.push(newCar)
        globalId++
        res.status(200).send(cars)
    }
}