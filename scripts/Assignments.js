import { getPets, getWalkers } from "./database.js"
import { getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()

let cities = getCities()


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
const findWalkerCity = (walker, allCities) => {
    let walkerAllCities = []

    for (const city of allCities) {
        if (walkerCities.walkerId === walker.id) {
            walkerAllCities.push(city)

        }

    }
    return walkerAllCities
}


// Function whose responsibility is to find city for walkers
const findCity = (cities, walkerAllCities) => {
    let walkerCity = ""

    for (const walkerCity of walkerAllCities) {
        for (city of cities) {
            if (walkerCities.cityId === cities.id) {
                walkerCity.push(city)
                walkerCity += `${city.name}`
                // walkerCity += `${city.name}

            }
        }
    }
    return walkerCity
}



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        // invoke both functions from above
        const findWalkerCity
        const fincCity

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

