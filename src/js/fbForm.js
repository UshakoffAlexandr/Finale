let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu')
let fbForm = document.querySelector('.feedback-block')
let mobileMenuMute = fbForm.querySelector('.feedback-block__mute-area')
let mainChatBtn = mainBlock.querySelector('.circle-button--chat-img')
let mobileChatBtn = mobileMenu.querySelector('.circle-button--chat-img')
let fbFormCloseBtn = fbForm.querySelector('.circle-button--close-img')

mainChatBtn.addEventListener('click', function () {
  let classes = fbForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      fbForm.classList.remove('feedback-block--hidden')
    }
  }
})

mobileChatBtn.addEventListener('click', function () {
  let classes = fbForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      fbForm.classList.remove('feedback-block--hidden')
    }
  }
})

fbFormCloseBtn.addEventListener('click', function () {
  fbForm.classList.add('feedback-block--hidden')
})

fbForm.addEventListener('keydown', function (evt) {
  if (evt.key === 27) {
    fbForm.classList.add('feedback-block--hidden')
  }
})

mobileMenuMute.addEventListener('click', function () {
  fbForm.classList.add('feedback-block--hidden')
})
