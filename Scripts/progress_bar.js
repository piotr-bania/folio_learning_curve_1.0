// Progress bar

let progressSection = document.querySelector('.progressSection')
let progressBar = document.querySelector('.progressBar')
let progressNum = document.querySelector('.progressNum')

let x, y

function updateProgressBar() {

    progressBar.style.height = `${getScrollPercentage()}%`
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()