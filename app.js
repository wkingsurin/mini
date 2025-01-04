const inputs = Array.from(document.querySelectorAll('input'))
const inputA = inputs[0]
const inputB = inputs[1]

const output = document.querySelector('.answer')

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (inputA && inputB) {
            output.textContent = +inputA.value + +inputB.value
        }
    })
})