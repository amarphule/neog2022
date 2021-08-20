const day = document.querySelector("#day")
const printDay = document.querySelector("#printResult")


const checkDay = () => {
    console.log()
    switch (day.options[day.selectedIndex].text) {
        case 'Monday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekday`;
            break;
        case 'Tuesday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekday`;
            break;
        case 'wednesday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekday`;
            break;
        case 'Thursday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekday`;
            break;
        case 'Friday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekday`;
            break;
        case 'Saturday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekend`;
            break
        case 'Sunday':
            printDay.innerHTML = `The ${day.options[day.selectedIndex].text} is Weekend`;
            break;
    }
}