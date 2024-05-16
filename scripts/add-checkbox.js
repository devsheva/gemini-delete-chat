console.log('add-checkbox.js loaded')

function run() {
  const conversations = document.querySelectorAll(
    '.conversation-items-container'
  )

  conversations.forEach((conversation, index) => {
    let checkbox = conversation.querySelector('.conversation-checkbox')

    if (!checkbox) {
      checkbox = createCheckbox(index)
      console.log(checkbox)
      conversation.insertAdjacentElement('afterbegin', checkbox)

      // todo: add stop propagation
    }
  })
}

function createCheckbox(index) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'conversation-checkbox'
  checkbox.dataset.index = index
  return checkbox
}

run()
