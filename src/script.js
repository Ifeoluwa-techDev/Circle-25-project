'use strict'
const numberKeys = document.querySelectorAll('.dark-btn')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const actions = document.querySelectorAll('[data-action]')
const deleteBtn = document.querySelector('.delete')
const clear = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
const decimal = document.querySelector('.decimal')

numberKeys.forEach(numberKey => {
    numberKey.addEventListener('click', () => {
        input.innerHTML += numberKey.innerHTML
        decimal.disabled = false;
    })
})

actions.forEach(action => {
    action.addEventListener('click', () => {
        input.innerHTML += action.innerHTML
    })
})

deleteBtn.addEventListener('click', () => {
    input.innerText = input.innerText.slice(0, -1);
})

clear.addEventListener('click', () => {
    input.innerText = '';
    output.innerText = '';
})

decimal.addEventListener("click", function () {
  if (input.innerHTML.includes(".")) {
    decimal.disabled = true;
  }
});





