var buttonForward = document.querySelector('.skipControl__next');

chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message == 'forward') {
    var e = document.createEvent('Events')
    e.initEvent('click', true, false)
    buttonForward.dispatchEvent(e)
  }
})