let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu-block')
let mobileMenuMute = mobileMenu.querySelector('.mobile-menu-block__mute-area')
let mainBurgerBtn = mainBlock.querySelector('.circle-button--burger-img')
let mobileMenuCloseBtn = mobileMenu.querySelector('.circle-button--close-img')
let bodyBlock = document.querySelector('#body')

mainBurgerBtn.addEventListener('click', function () {
  let classes = mobileMenu.className.split(/\s+/)
  mainBurgerBtn.classList.add('circle-button--none')
  if (classes[classes.length - 1] === 'mobile-menu-block--hidden') {
    mobileMenu.classList.remove('mobile-menu-block--hidden')
    bodyBlock.classList.add('body__overflow-off')
  }
})

mobileMenuCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerBtn.classList.remove('circle-button--none')
  bodyBlock.classList.remove('body__overflow-off')
})

mobileMenu.addEventListener('keydown', function (evt) {
  if (evt.key === 27) {
    mobileMenu.classList.add('mobile-menu-block--hidden')
    mainBurgerBtn.classList.remove('circle-button--none')
    bodyBlock.classList.remove('body__overflow-off')
  }
})

mobileMenuMute.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerBtn.classList.remove('circle-button--none')
  bodyBlock.classList.remove('body__overflow-off')
})
