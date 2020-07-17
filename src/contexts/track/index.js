import createProvider from '../createProvider';

import actions from './actions';
import reducer from './reducer';

const { Context, Provider } = createProvider(actions, reducer, []);

export { Context as TrackContext, Provider as TrackProvider };
