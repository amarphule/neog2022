const factorial = document.querySelector("#factorial")
const factorialNumber = document.querySelector("#factorialNumber")

function printFactorial() {
    if (!factorial.value == "") {
        let result = 1
        for (k = factorial.value; k > 0; k--) {
            result = result * k
        }
        factorialNumber.innerHTML = "The factorial of " + factorial.value + " is " + result
    } else {
        factorialNumber.innerHTML = "Enter Value"
    }
}