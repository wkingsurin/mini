const inputs = Array.from(document.querySelectorAll('input'))
const inputA = inputs[0]
const inputB = inputs[1]

const output = document.querySelector('.answer')
const timePanel = document.querySelector('.time')

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (inputA && inputB) {
            output.textContent = +inputA.value + +inputB.value
            timePanel.textContent = setTime()
        }
    })
})

window.addEventListener('DOMContentLoaded', () => {
    setTime()
})

function setTime() {
    let time = getTime()

    if (time) {
        time = new Date(Date.now() - time)
        timePanel.textContent = correctTime(time)
    } else {
        localStorage.setItem('time', Date.now())
    }
}

function getTime() {
    let time = localStorage.getItem('time')

    if (time) {
        return time
    }
    else {
        return false
    }
}

function correctTime(time) {
    let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()

    return `${hours}:${minutes}:${seconds}`
}