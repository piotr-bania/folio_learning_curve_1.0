const hamburgerMenu = document.querySelector('.open-menu')
const navContent = document.querySelector('#nav-content')
const closeNavContent = document.querySelector('#nav-content')

hamburgerMenu.addEventListener('click', () => {
    navContent.classList.add('show')
})

closeNavContent.addEventListener('click', () => {
    navContent.classList.remove('show')
})