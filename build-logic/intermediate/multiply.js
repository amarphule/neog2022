const val = document.querySelector("#multiplicationNumber")
const printMul = document.querySelector("#printMul")

function multiply() {
    let mulNumber = val.value

    for (j = 1; j <= 12; j++) {
        if (!mulNumber == "" && Number(mulNumber)) {
            // console.log("go")
            let multipication = mulNumber * j
            printMul.innerHTML += multipication + "<br>"

        } else {
            // console.log("enter number")
            printMul.innerHTML = "Enter valid number"
        }
    }
}

function cleardata() {
    mulNumber = ""
    printMul.innerHTML = ""
}