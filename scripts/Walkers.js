import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

// Define a func that will get all objects in walkerCities array
// Should return an array

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []
    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walker.id === assignment.walkerId) {
            // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }
    // After the loop is done, return the assignments array
    return assignments
}


// Define a function that takes array of matching objects
// Uses cityId prop on each one to find matching city name 
// Should return a string containing all city names

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            // Add the name of the matching city to the array of city names
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }
    // After the loop is done, return the string
    return cityNames
}