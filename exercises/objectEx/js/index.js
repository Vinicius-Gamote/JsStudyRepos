function myScope() {

    const form = document.querySelector('.form')
    const result = document.querySelector('.result')
    const people = []

    function receiveFormEvent(event) {

        event.preventDefault()
        const name = form.querySelector('.name')
        const lastName = form.querySelector('.last-name')
        const weight = form.querySelector('.weight')
        const height = form.querySelector('.height')

        people.push ({

            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value

        })

        console.log(people)

        result.innerHTML += `<p>${name.value} ${lastName.value} ` +
        `${weight.value} ${height.value}</p>`
    }

    form.addEventListener('submit', receiveFormEvent)

}

myScope()