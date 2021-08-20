const prime = document.querySelector("#prime")
const printPrime = document.querySelector("#printPrime")

function checkPrime() {
    let isPrime = true
    if (prime.value == 1) {
        printPrime.innerHTML = "1 is neither prime nor composite number."
    }
    else if (prime.value > 1) {
        for (p = 2; p < prime.value; p++) {
            if (prime.value % p == 0) {
                isPrime = false
                printPrime.innerHTML = "Given number is not prime number."
                break
            }
        }
        if (isPrime) {
            printPrime.innerHTML = "Given number is prime number."
        }
    }
}