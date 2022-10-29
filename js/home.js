let menu = document.querySelector('menu')
let navBar = document.querySelector('.header_class')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navBar.classList.toggle('open')
}