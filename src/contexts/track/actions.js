import { tracker } from '../../apis';

const actions = {
  createTrack(dispatch) {
    return async track => {
      try {
        const response = await tracker.post('/tracks', track);

        dispatch({ payload: response.data.data, type: 'CREATE_TRACK' });
      } catch (error) {
        console.log(error);
      }
    };
  },
  indexTracks(dispatch) {
    return async () => {
      try {
        const response = await tracker.get('/tracks');

        dispatch({ payload: response.data.data, type: 'INDEX_TRACKS' });
      } catch (error) {
        console.log(error);
      }
    };
  }
};

export default actions;
