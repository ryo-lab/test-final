let topicsArray = [
    "pokemon",
    "dragon quest",
    "final fantasy",
    "sword art online",
    "Xenoblade",
    "kingdom hearts"
]

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4, 21);