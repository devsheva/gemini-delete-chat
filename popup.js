console.log('popup.js loaded')

const loadAndRunScript = (script) => {
  return (tab) => {
    console.log('loadAndRunScript.callback', { script, tab })
  }
}

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
