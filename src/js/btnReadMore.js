let mainBlock = document.querySelector('.main-block')
let readMoreBtnText = mainBlock.querySelector('.read-more-button')
let testContent = mainBlock.querySelector('.text-content__text')
let textShowPart = 'text-content__text--show-part'
let readMore = 'Читать далее'
let readLess = 'Свернуть'
let brandsBlock = document.querySelector('.brands-block')
let readMoreBtnBrands = brandsBlock.querySelector('.read-more-button')
let brandsList = brandsBlock.querySelector('.brands-list')
let brandsShowPart = 'brands-list--show-part'
let close = 'Скрыть'
let open = 'Показать всё'
let devicesBlock = document.querySelector('.devices-block')
let readMoreBtnDevices = devicesBlock.querySelector('.read-more-button')
let devicesList = devicesBlock.querySelector('.devices-list')
let devicesShowPart = 'devices-list--show-part'

let openClose = function (button, block, showPart, closeText, openText) {
  let classes = block.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === showPart) {
      let classes = block.className.split(/\s+/)
      block.classList.remove(showPart)
      button.classList.remove('read-more-button--close')
      button.classList.add('read-more-button--open')
      button.firstChild.data = closeText
    } else {
      block.classList.add(showPart)
      button.classList.remove('read-more-button--open')
      button.classList.add('read-more-button--slose')
      button.firstChild.data = openText
    }
  }
}

readMoreBtnText.addEventListener('click', function () {
  openClose(readMoreBtnText, testContent, textShowPart, readLess, readMore)
})

readMoreBtnBrands.addEventListener('click', function () {
  openClose(readMoreBtnBrands, brandsList, brandsShowPart, close, open)
})

readMoreBtnDevices.addEventListener('click', function () {
  openClose(readMoreBtnDevices, devicesList, devicesShowPart, close, open)
})
