const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    const inputWeight = e.target.querySelector('#weight')
    const inputHeight = e.target.querySelector('#height')
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if (!weight){

        setResult('Invalid weight!', false)
        return 
    }

    if (!height){

        setResult('Invalid Height', false)
        return

    }

    const imc = getImc(weight, height)
    const imcLevel = getLevelImc(imc)
    const msg = `Your IMC is ${imc} (${imcLevel})`

    setResult(msg, true)

})

function getLevelImc (imc) {

    const level = ['Under weight!', 'Normal weight!', 'Overweight', 
    'Grade 1 obesity!', 'Grade 2 obesity', 'Grade 3 obesity']

    if (imc >= 39.9)
    return level[5]

    if (imc >= 34.9)
    return level[4]

    if (imc >= 29.9)
    return level[3]

    if (imc >= 24.9)    
    return level[2]

    if (imc >= 18.5)  
    return level[1]

    if (imc <18.5)
    return level[0]

}

function getImc (weight, height) {

    const imc = weight / height ** 2
    return imc.toFixed(2)

}

function createP () {

    const p = document.createElement('p')
    return p

}

function setResult (msg, isValid) {

    const result = document.querySelector('#result')
    result.innerHTML = ''    


    const p = createP()

        
    if (isValid) {

        p.classList.add('paragraph-result')

    } else {

        p.classList.add('bad')

    }
    p.innerHTML = msg;
    result.appendChild(p)

}