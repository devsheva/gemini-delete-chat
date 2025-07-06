console.log('add-checkbox.js loaded')

function run() {
  const conversations = document.querySelectorAll(
    '.conversation-items-container'
  )

  conversations.forEach((conversation, index) => {
    let checkbox = conversation.querySelector('.conversation-checkbox')

    if (!checkbox) {
      checkbox = createCheckbox(index)
      
      // Find the clickable div that contains the chat name
      const clickableDiv = conversation.querySelector(
        'div[data-test-id="conversation"]'
      )
      
      // Insert checkbox at the very beginning of the clickable div
      if (clickableDiv) {
        clickableDiv.insertAdjacentElement('afterbegin', checkbox)
      }
    }

    const clickableDiv = conversation.querySelector(
      'div[data-test-id="conversation"]'
    )
    console.log({ clickableDiv })
    clickableDiv.addEventListener('click', preventEventPropagation)
  })
}

/**
 *
 * @param {Event} event
 */
function preventEventPropagation(event) {
  event.stopPropagation()
}

function createCheckbox(index) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'conversation-checkbox'
  checkbox.dataset.index = index
  checkbox.style.marginRight = '8px' // Add some spacing between checkbox and chat name
  checkbox.addEventListener('click', preventEventPropagation)
  return checkbox
}

run()