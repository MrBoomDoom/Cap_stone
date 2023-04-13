const cars = require('./Db.json')
let globalId = 4

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
            worth: +worth,
            topSpeed,
            horsePower,
            brand,
            transmission,
            driveTrain,
            imageURL
        }
        cars.push(newCar)
        res.status(200).send(cars)
        globalId++
    }
}