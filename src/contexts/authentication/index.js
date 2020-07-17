import createProvider from '../createProvider';

import actions from './actions';
import reducer from './reducer';

const { Context, Provider } = createProvider(actions, reducer, {
  notification: null,
  token: false
});

export { Context as AuthenticationContext, Provider as AuthenticationProvider };
