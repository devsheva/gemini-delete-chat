console.log('delete-conversations.js loaded')

function getSelectedConversations() {
  return document.querySelectorAll('.conversation-checkbox:checked')
}

function removeCheckboxes() {}

function waitForMenuToAppear() {
  return new Promise((resolve) => {
    const overlayDiv = document.querySelector('div.cdk-overlay-container')

    const callback = (mutations, observer) => {
      console.log(mutations, observer)
      const button = overlayDiv.querySelector(
        'button[data-test-id="delete-button"]'
      )

      if (button) {
        observer.disconnect()
        return resolve(button)
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(overlayDiv, { subtree: true, childList: true })
  })
}

function waitForConfirm() {
  return new Promise((resolve) => {
    const overlayDiv = document.querySelector('div.cdk-overlay-container')

    const callback = (mutations, observer) => {
      console.log(mutations, observer)
      const button = overlayDiv.querySelector(
        'button[data-test-id="confirm-button"]'
      )

      if (button) {
        observer.disconnect()
        return resolve(button)
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(overlayDiv, { subtree: true, childList: true })
  })
}

/**
 *
 * @param {Element} checkbox
 */
async function deleteConversation(checkbox) {
  await delay(100)
  const parentEl = checkbox.parentElement
  const actions = parentEl.nextElementSibling.querySelector('button')

  console.log('1. Start observing actions overlay...')
  const overlayPromise = waitForMenuToAppear()

  console.log('2. Clicking three dot button ...')
  actions.click()

  await delay(200)

  console.log('3. Waiting for delete button to appear...')
  const deleteButton = await overlayPromise

  if (deleteButton) {
    console.log('4. Clicking delete button...', { deleteButton })

    const confirmPromise = waitForConfirm()

    deleteButton.click()
    await delay(200)

    const confirmButton = await confirmPromise
    if (confirmButton) {
      console.log('5. Confirming delete...', confirmButton)
      confirmButton.click()
    }
  }

  console.log('Delete completed!')
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function run() {
  const selectedConversations = getSelectedConversations()

  if (selectedConversations.length === 0) {
    console.log('no conversations to delete')
    removeCheckboxes()
    return
  }

  for (const el of selectedConversations) {
    await deleteConversation(el)
  }
}

run()
