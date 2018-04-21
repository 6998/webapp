const messages = (state = {}, action) => {
  switch (action.type) {
    case ("NEW_PASSWORD_REQUIRED"):
      return {...state, loading: true}
    default:
      return {...state};
  }
};

export default messages;
