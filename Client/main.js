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

carName, worth, topSpeed, horsePower, brand, transmission, driveTrain, imageURL

const submitHandler = (e) => {
    e.preventDefault()

    let carName = document.querySelector('#carName')
    let worth = document.querySelector('#worth')
    let topSpeed = document.querySelector('#topSpeed')
    let horsePower = document.querySelector('#horsePower')
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
    // locate section on HTML where we will be putting our movie card
    const carContainer = document.querySelector('#cars-container')

    // Create a new HTML div element
    const carCard = document.createElement('div')

    // Add the house-card class to the houseCard div we just created. This is mainly just for styling.
    carCard.classList.add('car-card')

    // Define which additional HTML elements need to exist inside our housesCard div
    carCard.innerHTML = `
    <img alt='car cover image' src=${car.imageURL} class="car-cover-image"/>
    <p class="address">${car.address}</p>
    <div class="btns-container">
        <p class="cars-price">$${car.price}</p>
    </div>
    <button onclick="deleteCar(${car.id})">delete</button>
    `

    // Attach the houseCard div (with all of it's nested elements) to the housesContainer on our HTML
    carContainer.appendChild(carCard)
}

const displayCars = (arr) => {
    const carContainer = document.querySelector('#cars-container')

    carContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCarCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCars()