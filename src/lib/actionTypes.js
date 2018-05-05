import keymirror from 'keymirror';

export const exampleActionTypes = keymirror({
  // this is example
  EXAMPLE_ACTION: null
});

export const userActionTyes = keymirror({
  // start fetch
  START_FETCH_USER: null,
  // fetch the user from the server
  DONE_FETCH_USER: null
});

export const experimentActionTypes = keymirror({
  // start fetch
  SEND_EXPERIMENTS: null,
  // fetch the user from the server
  RECIEVE_EXPERIMENTS: null
});