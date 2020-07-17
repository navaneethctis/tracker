import createProvider from '../createProvider';

import actions from './actions';
import reducer from './reducer';

const { Context, Provider } = createProvider(actions, reducer, {
  currentLocation: null,
  isRecording: false,
  locations: [],
  name: ''
});

export { Context as LocationContext, Provider as LocationProvider };
