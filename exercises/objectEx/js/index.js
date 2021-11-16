function myScope() {

    const form = document.querySelector('.form')

    // form.onsubmit = function (event) {

    //     event.preventDefault()
    //     alert(1)
    //     console.log('Submited content!')

    // }

    let count = 1

    function receiveFormEvent(event) {

        event.preventDefault()
        console.log(`Form not submited ${count}`)
        count++

    }

    form.addEventListener('submit', receiveFormEvent)

}

myScope()