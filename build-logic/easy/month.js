const months = [
    {
        month: "January",
        day: 31
    },
    {
        month: "February",
        day: 28
    },
    {
        month: "March",
        day: 31
    },
    {
        month: "April",
        day: 30
    },
    {
        month: "May",
        day: 31
    },
    {
        month: "June",
        day: 30
    },
    {
        month: "July",
        day: 31
    },
    {
        month: "August",
        day: 31
    },
    {
        month: "September",
        day: 30
    },
    {
        month: "October",
        day: 31
    },
    {
        month: "November",
        day: 30
    },
    {
        month: "December",
        day: 31
    },

]

const selectedMonth = document.querySelector("#months")
const days = document.querySelector("#days")

const checkDays = () => {
    let value = selectedMonth.value - 1
    if (selectedMonth.value == "") {
        days.innerHTML = "Please Select month"
        return
    }

    para = (months[value].day == 31) ? `The ${months[value].month} has 31 days` : `The ${months[value].month} does not have 31 days, it contains ${months[value].day} days.`
    days.innerHTML = para
}