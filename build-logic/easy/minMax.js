let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let one = 129, two = 251
if (one > two) {
    number1.innerHTML = "Maximum"
    number2.innerHTML = "Minimum"
} else {
    number1.innerHTML = "Minimun"
    number2.innerHTML = "Maximum"
}
