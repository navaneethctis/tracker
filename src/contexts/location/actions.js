const actions = {
  resetForm(dispatch) {
    return () => dispatch({ type: 'RESET_FORM' });
  },
  setCurrentLocation(dispatch) {
    return (isRecording, location) => {
      dispatch({ payload: location, type: 'SET_CURRENT_LOCATION' });

      if (isRecording) dispatch({ payload: location, type: 'PUSH_LOCATION' });
    };
  },
  setName(dispatch) {
    return name => dispatch({ payload: name, type: 'SET_NAME' });
  },
  startRecording(dispatch) {
    return () => dispatch({ type: 'START_RECORDING' });
  },
  stopRecording(dispatch) {
    return () => dispatch({ type: 'STOP_RECORDING' });
  }
};

export default actions;
