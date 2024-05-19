# gemini-delete-chat

## Introduction

Gemini Delete Chat is a Chrome Extension that helps to perform a bulk delete of conversations.

## TODOS

- [X] Remove Checkboxes
- [ ] Stop Event Propagation on Checkbox Click
- [ ] Bulk Delete Conversation
- [ ] Publish Extension on Chrome Web Store
- [ ] Improve Contributing Guide
  - [ ] Add code of conduct

## Contributing

Bug reports and pull requests are welcome. This project is intended to be a safe, welcoming space for collaborations.

1. Fork the repository
2. Create a new feature branch on your fork `git checkout -b feature/my_branch`
3. After you've done your stuff, commit your changes f.e.
`git commit -am "example commit"`
4. Open a Pull Request.

## Known Issues

Since a `MutationObserver` is used on waiting the gemini overlay to change, it's first needed to hover some conversations in order to make it available in DOM and start observing.

Things already tried without success:

- using `dispatchEvent(event)` on conversations element to dispatch an hover event, but since it's untrusted, as official doc says, it won't be effective.