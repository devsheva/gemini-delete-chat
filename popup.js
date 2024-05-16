console.log('popup.js loaded')

/**
 * Load constants than run listener script
 * @param {string} script
 * @returns
 */
const loadAndRunScript = (script) => {
  return (tab) => {
    console.log('loadAndRunScript.callback', { script, tab })
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ['constants.js'],
      },
      () => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: [scriptsPath, script].join('/').split(),
        })
      }
    )
  }
}

/**
 *
 * @param {string} id
 * @param {string} script
 */
const addBtnListener = (id, script) => {
  document.getElementById(id).addEventListener('click', () => {
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      ([tab]) => loadAndRunScript(script)(tab)
    )
  })
}

const run = () => {
  addBtnListener('add-checkbox', 'add-checkbox.js')
}

run()
