const number = document.querySelector('#number')
const insertedNumber = document.querySelector('#insertedNumber')
const result = document.querySelector('#result')

const check = () => {
    insertedNumber.innerHTML = number.value
    if (!number.value == "") {
        if (number.value % 2 === 0) {
            result.innerHTML = "Even"
        } else {
            result.innerHTML = "Odd"
        }
    } else {
        alert("Insert Number")
    }
}