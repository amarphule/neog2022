const minNumber = document.querySelector("#minNumber")

const CheckminNumber = (x, y, z) => {
    let minValue = 0
    minValue = (x < y) ? x : y
    minValue = (minValue < z) ? minValue : z
    minNumber.innerHTML = minValue
}
CheckminNumber(35, 29, 46)