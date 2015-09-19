var playingTabId = null

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({url: '*://soundcloud.com/*'}, function(tabs) {
    if (tabs.length == 0) {
      return chrome.tabs.create({url: 'https://soundcloud.com'})
    }

    tabs = tabs.sort(function(tab1, tab2) {
      return tab2.id - tab1.id
    })

    var tabId = tabs[0].id
    var tabExists = tabs.some(function(tab) {
      return tab.id == playingTabId
    })

    if (tabExists) {
      tabId = playingTabId
    }

    chrome.tabs.sendMessage(tabId, 'forward')
  })
});