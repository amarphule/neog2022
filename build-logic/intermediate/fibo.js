const fiboNumber = document.querySelector("#fibonacciNumber")
const fiboSeries = document.querySelector("#fiboSeries")

const printFiboSeries = () => {

    let prev = 0, next = 1, nextNumber = 0
    for (f = 0; f < fiboNumber.value; f++) {
        fiboSeries.innerHTML += prev + " "
        nextNumber = prev + next
        prev = next
        next = nextNumber
    }
}