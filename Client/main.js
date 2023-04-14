const form = document.querySelector('form')

const baseURL = `http://localhost:3000/api/cars`


const getAllCars = () => {
    axios.get(baseURL)
        .then((res) => {
            displayCars(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createCar = (body) => {
    axios.post(baseURL, body)
        .then((res) => {
            displayCars(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteCar = (id) => {
    axios.delete(`${baseURL}/${id}`)
        .then((res) => {
            displayCars(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const submitHandler = (e) => {
    e.preventDefault()

    let carName = document.querySelector('#name')
    let worth = document.querySelector('#worth')
    let topSpeed = document.querySelector('#speed')
    let horsePower = document.querySelector('#hp')
    let brand = document.querySelector('#brand')
    let transmission = document.querySelector('#transmission')
    let driveTrain = document.querySelector('#driveTrain')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        carName: carName.value,
        worth: worth.value, 
        topSpeed: topSpeed.value, 
        horsePower: horsePower.value, 
        brand: brand.value, 
        transmission: transmission.value, 
        driveTrain: driveTrain.value, 
        imageURL: imageURL.value
    }

    createCar(bodyObj)

    carName.value = ''
    worth.value = ''
    topSpeed.value = ''
    horsePower.value = ''
    brand.value = ''
    transmission.value = ''
    driveTrain.value = ''
    imageURL.value = ''
}

const createCarCard = (car) => {

    const carsContainer = document.querySelector('#cars-container')

    const carCard = document.createElement('div')

    carCard.classList.add('car-card')

    carCard.innerHTML = `

    <p class="cars-carName">${car.carName}</p>
    <img alt='car image' src=${car.imageURL} class="car-cover-image"/>

    <p class="cars-worth">$${car.worth}</p>
    <p class="cars-topSpeed">Top Speed- ${car.topSpeed} mph</p>
    <p class="cars-horsePower">HP- ${car.horsePower} </p>

    <p class="cars-brand">${car.brand}</p>
    <p class="cars-transmission">${car.transmission}</p>
    <p class="cars-driveTrain">${car.driveTrain}</p>

    <button onclick="deleteCar(${car.id})">delete</button>
    `

    carsContainer.appendChild(carCard)
}

const displayCars = (arr) => {
    const carsContainer = document.querySelector('#cars-container')

    carsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCarCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCars()