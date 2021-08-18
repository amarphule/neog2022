const maxNumber = document.querySelector('#maxNumber')

const CheckMaxNumber = function (a, b, c) {
    let maxValue = 0
    maxValue = (a > b) ? a : b
    maxValue = (maxValue > c) ? maxValue : c
    return maxNumber.innerHTML = maxValue
}
CheckMaxNumber(8, 23, 13)