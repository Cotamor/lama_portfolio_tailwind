const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const moon = document.querySelector('#moon')
const body = document.querySelector('body')
const hLinks = document.querySelectorAll('#hLink')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('hidden')
})

hLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    menu.classList.toggle('hidden')
  })
})

moon.addEventListener('click', () => {
  body.classList.toggle('dark')
})
