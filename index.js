let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

console.log(saveEL)

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}
