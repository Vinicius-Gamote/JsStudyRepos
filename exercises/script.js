const people = {

    name: 'Gamotera',
    age: 20,
    position: 'Developer'

}

for (let keys in people) {

    console.log(keys, people[keys])

}

// for (let i = -10; i <= 5; i++) {

//     const pair = i % 2 === 0 ? 'pair' : 'odd'
//     console.log(i, pair)

// }

// ------------------------------ switch/case -------------------
// function getDayWeekText(dayWeek) {

//     let dayWeekText

//     switch (dayWeek) {
//     case 0:
//         dayWeekText = 'Sunday'
//         return dayWeekText
        
//     case 1:
//         dayWeekText = 'Monday'
//         return dayWeekText
        
//     case 2:
//         dayWeekText = 'Tuesday'
//         return dayWeekText
            
//     case 3:
//         dayWeekText = 'Wednesday'
//         return dayWeekText
        
//     case 4:
//         dayWeekText = 'Thursday'
//         return dayWeekText
        
//     case 5:
//         dayWeekText = 'Friday'
//         return dayWeekText
        
//     case 6:
//         dayWeekText = 'Saturday'
//         return dayWeekText
        
//     default:
//         dayWeekText = ''
//         return dayWeekText
        
//     }    

// }

// const date = new Date('1998-10-30 02:58:58')
// let dayWeek = date.getDay()
// const dayWeekText = getDayWeekText(dayWeek)

// console.log(dayWeek, dayWeekText)

// ----------------------- Object Date() ----------------------------------
// function zeroLeft (num) {

//     return num >= 10 ? num : `0${num}`

// }

// function formatDate (date) {

//     const day = zeroLeft(date.getDate())
//     const month = zeroLeft(date.getMonth() + 1)
//     const year = zeroLeft(date.getFullYear())
//     const hour = zeroLeft(date.getHours())
//     const minute = zeroLeft(date.getMinutes())
//     const second = zeroLeft(date.getSeconds())

//     return `${day}/${month}/${year} ${hour}:${minute}:${second}`

// }

// const date = new Date()
// const brazilDate = formatDate(date)
// console.log(brazilDate)

// const date = new Date(1637239393913)

// console.log('Day', date.getDate())
// console.log('Month', date.getMonth() + 1) // Month start by 0
// console.log('Year', date.getFullYear())
// console.log('Hour', date.getHours())
// console.log('Minutes', date.getMinutes())
// console.log('Seconds', date.getSeconds())
// console.log('Miliseconds', date.getMilliseconds())
// console.log('Week Day', date.getDay()) // 0 - Sunday, 6 - Saturday

// console.log(date.toString())


// const oneDay = 60 * 60 * 24 * 1000
// const fiveHours = 60 * 60 * 5 * 1000
// const date = new Date(0 + fiveHours - oneDay)

// const userPoint = 500
// const userLevel = userPoint >= 1000 ? 'VIP user!' : 'Normal user!' // rather than if (userPoint  >=  1000) {console.log('VIP user!')} else {console.log('Normal user1')}

// const userColor = 'Black'
// const userStandard = userColor || 'White'

// console.log(userLevel, userStandard)

// const hour = 12

// if (hour >= 0 && hour <= 11) {

//     console.log('Good Morning!')

// } else if (hour >= 12 && hour <= 17) {

//     console.log('Good Afternoon')
    
// } else if (hour >= 18 && hour <= 23) {

//     console.log('Good night!')

// } else {

//     console.log('Hello!')

// }

// const people = {

//     name: 'Gamote',
//     age: '20',

//     say() {

//         console.log(`My age is ${this.age}`) // This reference to object 'people'

//     },

//     incrementAge() {

//         this.age++

//     }

// }

// people.say()
// people.incrementAge()
// people.say()

// ---------------- Arrow function --------------------

// const squareRoot = s => s ** 0.5

// console.log(squareRoot(16))

// function sum(x = 5, y = 5) {

//     const result = x + y
    
//     return result

// }

// const result = sum()
// console.log(result)

// const students = ['Gamotera', 'Vinicius']
// students.unshift('Almeida')
// students.push('Pereira')
// const remove = students.pop()

// console.log(remove) //remove 0 index or use delete students[0]
// console.log(students) 

// let num1 = 50.232840000
// let whatIf = num1 + ' is? '

// console.log(num1.toFixed(3))
// console.log(Number.isInteger(num1))
// console.log(whatIf + num1.toString())

// let num1 = 9.58458121
// let num2 = Math.round(num1);

// console.log(typeof num2)

// let randomic = (Math.random() * (20 - 10) + 10)
// console.log(randomic)