console.log('remove-checkbox.js loaded')

function run() {
  const conversations = document.querySelectorAll('.conversation-checkbox')
  conversations.forEach((checkbox) => checkbox.remove())
}

run()
