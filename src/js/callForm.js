let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu')
let callForm = document.querySelector('.call-block')
let callFormMute = callForm.querySelector('.call-block__mute-area')
let mainCallBtn = mainBlock.querySelector('.circle-button--call-img')
let mobileCallBtn = mobileMenu.querySelector('.circle-button--call-img')
let callFormCloseBtn = callForm.querySelector('.circle-button--close-img')

mainCallBtn.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

mobileCallBtn.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

callFormCloseBtn.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})

callForm.addEventListener('keydown', function (evt) {
  if (evt.key === 27) {
    callForm.classList.add('call-block--hidden')
  }
})

callFormMute.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})
