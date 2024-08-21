console.log('add-checkbox.js loaded')

function run() {
  const conversations = document.querySelectorAll(
    '.conversation-items-container'
  )

  conversations.forEach((conversation, index) => {
    let checkbox = conversation.querySelector('.conversation-checkbox')

    if (!checkbox) {
      checkbox = createCheckbox(index)
      const iconDiv = conversation.querySelector('div.ng-star-inserted')
      iconDiv.insertAdjacentElement('beforebegin', checkbox)
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
  checkbox.addEventListener('click', preventEventPropagation)
  return checkbox
}

run()
