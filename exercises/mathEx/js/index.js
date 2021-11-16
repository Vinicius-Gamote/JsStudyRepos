// ------------------------- Exercise with HTML ------------------------------

const number = Number(prompt('Write a number: '))
const titleNumber = document.getElementById('title-number')
const text = document.getElementById('text')
const squareRoot = document.getElementById('square-root')
const trueFalse = document.getElementById('true-false')
const promptNumber = document.getElementById('prompt-number')
const isNan = document.getElementById('is-Nan')
const roundDown = document.getElementById('round-down')
const roundUp = document.getElementById('round-up')
const decimalPlaces = document.getElementById('two-decimal-places')

titleNumber.innerHTML = number
text.innerHTML = `<p>your number - 2 equals: ${number - 2}.</p>`
squareRoot.innerHTML = `${Math.sqrt(number + 2)}`
promptNumber.innerHTML = `${number}`
trueFalse.innerHTML = `${Number.isInteger(number)}`
isNan.innerHTML = `${Number.isNaN(number)}`
roundDown.innerHTML = `${Math.floor(number)}`
roundUp.innerHTML = `${Math.ceil(number)}`
decimalPlaces.innerHTML = `${number.toFixed(2)}`

// Using HTML on javascript script, need to put += on innerHTML.
// text.innerHTML += `<p>With two decimal places: ${number.toFixed(2)}</p>`
