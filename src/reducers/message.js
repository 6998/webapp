const messages = (state = {}, action) => {
  switch (action.type) {
    case ('START_NEW_MESSAGE'):
      return {...state, loading: true}

    case ('NEW_MESSAGE'):
      const msg = action.msg.messages;

      if(!msg)
        return {...state};

      let list = state.list;

      if(!list || !list.length)
        list = msg;
      else
        list = list.concat(msg);

      return { ...state, list, loading: false};

    default:
      return {...state};
  }
};

export default messages;
