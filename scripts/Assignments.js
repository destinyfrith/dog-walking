import { getPets, getWalkers } from "./database.js"
import { getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()

let cities = getCities()
let walkerCities = getWalkerCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// function called findWalkerCity to find walker's city assignments
// link walkerCities to walkers
const findWalkerCity = (walker, walkerCities) => {
    let walkerAllCities = []

    for (const walkerCity of walkerCities) {
        if (walkerCity.walkerId === walker.id) {
            walkerAllCities.push(walkerCity)

        }

    }
    return walkerAllCities
}


// Function whose responsibility is to link walkerCities to cities
const findCity = (cities, walkerAllCities) => {
    let cityHTML = ""

    for (const walkerCity of walkerAllCities) {
        for (const city of cities) {
            if (walkerCity.cityId === city.id) {
                cityHTML += `${city.name}`


            }
        }
    }
    return cityHTML
}



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const walkerAllCities = findWalkerCity(currentPetWalker, walkerCities)
        const walkerCity = findCity(cities, walkerAllCities)


        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${walkerCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

