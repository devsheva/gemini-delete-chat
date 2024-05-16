console.log('toggle-checkbox.js loaded')

function run() {
  const conversations = document.querySelectorAll('.conversation-checkbox')

  conversations.forEach((checkbox) => (checkbox.checked = !checkbox.checked))
}

run()
