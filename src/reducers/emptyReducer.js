const messages = (state = {}, action) => {
  switch (action.type) {
    case ('START_NEW_MESSAGE'):
      return {...state, loading: true}
    default:
      return {...state};
  }
};

export default messages;
