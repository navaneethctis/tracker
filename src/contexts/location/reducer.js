const reducer = (state, action) => {
  switch (action.type) {
    case 'PUSH_LOCATION':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'RESET_FORM':
      return { ...state, locations: [], name: '' };
    case 'SET_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'START_RECORDING':
      return { ...state, isRecording: true };
    case 'STOP_RECORDING':
      return { ...state, isRecording: false };
    default:
      return state;
  }
};

export default reducer;
