const referenceCard = document.querySelector('#reference_card')

function colorsGenerator(number) {
    
    // generating the hex code

    function hexCode() {

        const values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

        var hex = '#'

        for (let n =0; n<6 ; n++) {
            hex+= `${values[Math.floor(Math.random()*values.length)]}`
        }

        return hex
    }

    // creating an array with the quatity of hex codes asked
    
    var colors = []

    for (let i = 0; i < number; i++) {
        colors[i] = hexCode()
    }

    return colors

}


function generateColors() {
    var inputValue = document.querySelector ('.quantity_input').value

    if (!inputValue || parseInt(inputValue) != parseFloat(inputValue)) {
        alert('Insira um valor válido!')
    } else {
        //first: the next scene need to be prepared to be shown
        var mainStage = document.querySelector('main')
        const cardsContainer = document.querySelector('.color_cards_container')
        cardsContainer.innerHTML = ''
        var colorCards = colorsGenerator(inputValue)

        for (let x in colorCards) {
            const newCard = document.createElement('div')
            newCard.classList.add('color_card')
            newCard.setAttribute('id', `card${x}`)
            newCard.innerHTML = referenceCard.innerHTML
            cardsContainer.appendChild(newCard)
            
            newCard.children[0].style.backgroundColor = `${colorCards[x]}`
            newCard.children[1].innerHTML = `${colorCards[x]}`
            cardsContainer.appendChild(newCard)
        }

        // second: the website scene need to change
        const askStage = document.querySelector('.ask_div')
        askStage.classList.add('hide')

        let time = 1000

        cardsContainer.scrollTo(0,0);


        loading(time)
        setTimeout(() => {
            mainStage.classList.remove('hide')
        }, time)

    }
}

function loading(time) {
    const loadingScene = document.querySelector('.loading_div')
    loadingScene.style.display = 'flex'

    setTimeout(() => {
        loadingScene.style.display = 'none';
    }, time)
}






