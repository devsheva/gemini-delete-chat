console.log('delete-conversations.js loaded')

function getSelectedConversations() {
  return document.querySelectorAll('.conversation-checkbox:checked')
}

function removeCheckboxes() {}

function waitForMenuToAppear() {
  return new Promise((resolve) => {
    const overlayDiv = document.querySelector('div.cdk-overlay-container')

    const callback = (records, observer) => {
      console.log(records, observer)
      const buttons = overlayDiv.querySelectorAll('button')
      if (buttons) {
        console.log({ buttons })
        observer.disconnect()
        return resolve(buttons)
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

  console.log('1. Clicking three dot button ...')
  actions.click()

  await delay(200)

  // todo: check why observer is not triggering!!

  console.log('2. Waiting for delete button to appear...')
  const deleteButton = await waitForMenuToAppear()

  if (deleteButton) {
    console.log({ deleteButton })
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
