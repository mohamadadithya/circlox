const diameterButton = document.getElementById('btn-diameter')
const circumButton = document.getElementById('btn-circum')
const areaButton = document.getElementById('btn-area')

const diameterForm = document.getElementById('diameter')
const circumForm = document.getElementById('circumference')
const areaForm = document.getElementById('area')
const resultBox = document.querySelector('.result-box')
const resultBoxText = document.querySelector('.result-box .result')
const resultBoxButton = document.querySelector('.result-box .btn-ok')

const closeButton = document.querySelectorAll('.btn-close')
const formulaForm = document.querySelectorAll('.formula')

diameterButton.addEventListener('click', () => {
  diameterForm.classList.add('active')
})

circumButton.addEventListener('click', () => {
  circumForm.classList.add('active')
})

areaButton.addEventListener('click', () => {
  areaForm.classList.add('active')
})

closeButton.forEach((button) => {
  button.addEventListener('click', () => {
    formulaForm.forEach((form) => {
      form.classList.remove('active')
    })
  })
})

/* Calculation */
function diameterCalc() {
  const diameterInput = document.querySelector('.diameter-input')
  let value = diameterInput.value
  if(value.length === 0) {
    diameterInput.classList.add('invalid')
  } else {
    diameterInput.classList.remove('invalid')
    let calc = 2 * value
    let result = parseFloat(calc)
    resultBox.classList.add('active')
    resultBoxText.innerHTML = `D = 2 x r <br> = 2 x ${value} <br> = ${result}`
    diameterInput.value = ''
  }
}

function circumCalc() {
  const circumInput = document.querySelector('.circum-input')
  let value = circumInput.value
  if(value.length === 0) {
    circumInput.classList.add('invalid')
  } else {
    circumInput.classList.remove('invalid')
    let calc = 2 * 3.14 * value
    let result = parseFloat(calc)
    resultBox.classList.add('active')
    resultBoxText.innerHTML = `C = 2 x π x r <br> = 2 x 3.14 x ${value} <br> = ${result}`
    circumInput.value = ''
  }
}

function areaCalc() {
 const areaInput = document.querySelector('.area-input')
 let value = areaInput.value
 if(value.length === 0) {
   areaInput.classList.add('invalid')
 } else {
   areaInput.classList.remove('invalid')
   let calc = 3.14 * value * value
   let result = parseFloat(calc)
   resultBox.classList.add('active')
    resultBoxText.innerHTML = `A = π x r² <br> = 3.14 x ${value} x ${value} <br> = ${result}`
   areaInput.value = ''
 }
}

resultBoxButton.addEventListener('click', () => {
  resultBox.classList.remove('active')
})