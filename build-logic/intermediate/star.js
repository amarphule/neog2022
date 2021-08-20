const draw = document.querySelector("#starPattern")
function printStar(starNumber) {
    let star = "*"
    for (i = 0; i < starNumber; i++) {
        draw.innerHTML += star + "<br>"
        star = star + "*"
    }
}
printStar(5)