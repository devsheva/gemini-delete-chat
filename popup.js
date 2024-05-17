console.log('popup.js loaded')

/**
 * Load constants than run listener script
 * @param {string} script
 * @returns
 */
const loadAndRunScript = (script) => {
  return (tabId) => {
    console.log('loadAndRunScript.callback', { script, tabId })

    chrome.scripting.executeScript({
      target: { tabId },
      files: ['/scripts', script].join('/').split(),
    })
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
      ([tab]) => loadAndRunScript(script)(tab.id)
    )
  })
}

const run = () => {
  addBtnListener('add-checkbox', 'add-checkbox.js')
  addBtnListener('remove-checkbox', 'remove-checkbox.js')
  addBtnListener('toggle-checkbox', 'toggle-checkbox.js')
}

run()
