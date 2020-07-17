import AsyncStorage from '@react-native-community/async-storage';

import { tracker } from '../../apis';

import { NavigationService } from '../../services';

const actions = {
  clearNotification(dispatch) {
    return () => dispatch({ type: 'CLEAR_NOTIFICATION' });
  },
  authenticateUser(dispatch) {
    return async (action, user) => {
      try {
        const response = await tracker.post(`/${action}`, user);

        await AsyncStorage.setItem('token', response.data.data);

        dispatch({ payload: response.data.data, type: 'LOG_IN_USER' });

        NavigationService.navigate('TracksIndexScreen');
      } catch (error) {
        console.log(error);

        dispatch({
          payload: { message: error.response.data.error, type: 'error' },
          type: 'SET_NOTIFICATION'
        });
      }
    };
  },
  logOutUser(dispatch) {
    return async () => {
      await AsyncStorage.removeItem('token');

      dispatch({ type: 'LOG_OUT_USER' });

      NavigationService.navigate('AuthenticationFlow');
    };
  },
  redirectUserIfAuthenticated(dispatch) {
    return async () => {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        dispatch({ type: 'CLEAR_TOKEN' });

        return NavigationService.navigate('AuthenticationFlow');
      }

      dispatch({ payload: token, type: 'LOG_IN_USER' });

      NavigationService.navigate('TracksIndexScreen');
    };
  },
  setNotification(dispatch) {
    return (message, type) =>
      dispatch({ payload: { message, type }, type: 'SET_NOTIFICATION' });
  }
};

export default actions;
