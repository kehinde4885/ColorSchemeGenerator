//Variables
const colorDiv = Array.from(document.querySelectorAll('.color'))

const text = Array.from(document.querySelectorAll('.text'))

const form = document.querySelector('form')


let element = document.querySelector('input[type=color')

let defaultMode = document.querySelector('select')


form.addEventListener('submit', function(e){
    e.preventDefault()

    let color = element.value.replace( '#' , '')

    let mode = defaultMode.value

    let parameter = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`


fetch(parameter)
.then((res) => res.json())
.then(data => {
    let colors = data['colors']

    for( const p of colors){

        colorDiv[colors.indexOf(p)].style.backgroundColor = p.hex.value

        text[colors.indexOf(p)].textContent = p.hex.value
    }
    
})

})

