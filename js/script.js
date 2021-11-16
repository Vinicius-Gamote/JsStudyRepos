//  ------------------ Managing document html -------------------------

const name = prompt('Write your complete name: ')
document.body.innerHTML = `<br>Your name is: ${name} <br />`
document.body.innerHTML += `Welcome <strong>${name.toUpperCase()}</strong> !!!`

// ------------------------------ Managing Window ----------------------

let num1 = prompt(`${name.toUpperCase()} write a number:`)
let num2 = prompt(`${name.toUpperCase()} write another number:`)

num1 = Number(num1)
num2 = Number(num2)

alert(`The sum is ${num1 + num2}`)

// ------------------------------ Math -------------------------------

