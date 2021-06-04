// selectors (variables)
const colorContainer = document.querySelector('.colors-container')
const form = document.querySelector('.form')
const randomBtn = document.querySelector('.random-btn')
const textInput = document.getElementById('text')
const colorInput = document.getElementById('color')

// initial shades percentage
let percentage = 0

// create color shades
function createColorShades(colors) {
  const newColors = Array.from(colors)

  const colorArray = newColors.forEach((color) => {
    const colorShade = document.createElement('article')
    colorShade.className = 'color'

    const bgColor = '#' + color.hex

    colorShade.style.background = bgColor
    colorShade.innerHTML = `
        <div class="color-details">
          <p>${color.weight}%</p>
          <h2>#${color.hex}</h2>
        </div>
    `

    if (color.type === 'tint' && color.weight >= 40) {
      colorShade.style.color = '#0e0e0e'
    }

    colorContainer.appendChild(colorShade)
  })
}

// render color shades based on what user input
function renderInputtedColor(e) {
  e.preventDefault()

  colorContainer.innerHTML = ''

  const inputValue = textInput.value
  if (inputValue === '') {
    alert('Kindly input a color')
  }
  const colors = new Values(`${inputValue}`).all([(weight = 10)])

  createColorShades(colors)
}

// render color based on what user selected in the color input
function renderSelectedColor(e) {
  colorContainer.innerHTML = ''

  const colorValue = e.target.value
  const colors = new Values(`${colorValue}`).all([(weight = 10)])
  createColorShades(colors)
}

// render genrated color when random btn is clicked
function renderRandomColor() {
  colorContainer.innerHTML = ''

  const randomColor = '#' + generateRandomColor()

  console.log(randomColor)
  const colors = new Values(`${randomColor}`).all([(weight = 10)])
  createColorShades(colors)
}

// render generated hex color on load
function renderColorOnLoad() {
  colorInput.value = '#' + generateRandomColor()

  const colorValue = colorInput.value
  const colors = new Values(`${colorValue}`).all([(weight = 10)])
  createColorShades(colors)
}

// generates random hex color on load
function generateRandomColor() {
  return (Math.random().toString(16) + '000000').substring(2, 8)
}

// event listeners
form.addEventListener('submit', renderInputtedColor)
colorInput.addEventListener('input', renderSelectedColor)
randomBtn.addEventListener('click', renderRandomColor)
window.addEventListener('load', renderColorOnLoad)
