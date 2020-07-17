const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TRACK':
      return [action.payload, ...state];
    case 'INDEX_TRACKS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
