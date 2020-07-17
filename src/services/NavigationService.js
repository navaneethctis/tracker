import { NavigationActions } from 'react-navigation';

let _navigator;

const NavigationService = {
  navigate(routeName, params) {
    _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  },
  setTopLevelNavigator(navigator) {
    _navigator = navigator;
  }
};

export default NavigationService;
