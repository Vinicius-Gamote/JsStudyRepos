const h1  = document.querySelector('.container h1')
const date = new Date()

function getDayWeekText(dayWeek) {

    const daysWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return daysWeek[dayWeek]
    
}

function getMonthName(monthNumber) {

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    return months[monthNumber]
    
}

function zeroLeft (num) {

    return num >= 10 ? num : `0${num}`
    
}

function createDate (date) {

    const dayWeek = date.getDay()
    const monthNumber = date.getMonth()
    
    const dayName = getDayWeekText(dayWeek)
    const monthName = getMonthName(monthNumber)
    
    return (`${dayName}, ${monthName} ${date.getDate()} ` +
    `${date.getFullYear()} ` + 
    `${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`)

}

// const h1  = document.querySelector('.container h1')
// const date = new Date()

// h1.innerHTML = date.toLocaleDateString('en-US', { dateStyle: 'full' })
h1.innerHTML = createDate(date)