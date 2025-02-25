let counterLabel = document.getElementById("counter")
let previousEntries = document.getElementById("previous-data")

let count = 0
let total = 0

let calculated = false

function increment() {
    if (calculated == true) {
        previousEntries.textContent = "Previous entries: "
        calculated = false 
    }
    count++
    counterLabel.textContent = count
}

function save() {
    if (count != 0) {
        let entry = count + " - "
        previousEntries.textContent += entry
        total += count
        count = 0
        counterLabel.textContent = 0
    }
}

function sum() {
    if (total != 0) {
        previousEntries.textContent = "The sum results in " + total
        calculated = true
        total = 0
    }
}
