

let button = document.querySelector('button')
let divOutput = document.querySelector('div')

let counter = 0

button.addEventListener('click', () => {

    if (counter % 10 === 0) {
        let liste = document.createElement('p')
        liste.textContent = counter++
        divOutput.appendChild(liste).classList.add('round')
    } else {
        let liste = document.createElement('p')
        liste.textContent = counter++
        divOutput.appendChild(liste).classList.add('paragraph')
    }

})
