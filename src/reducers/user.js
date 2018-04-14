const messages = (state = {}, action) => {
  switch (action.type) {
    case ("NEW_PASSWORD_REQUIRED"):
      console.log("im here")
      return {...state, loading: true}
    default:
      return {...state};
  }
};

export default messages;
