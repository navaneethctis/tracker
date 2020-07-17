const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_NOTIFICATION':
      return { ...state, notification: null };
    case 'CLEAR_TOKEN':
      return { ...state, token: null };
    case 'SET_NOTIFICATION':
      return { ...state, notification: action.payload };
    case 'LOG_IN_USER':
      return { errorMessage: null, token: action.payload };
    case 'LOG_OUT_USER':
      return { ...state, token: null };
    default:
      return state;
  }
};

export default reducer;
