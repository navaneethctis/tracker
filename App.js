import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { AuthenticationProvider } from './src/contexts/authentication';
import { LocationProvider } from './src/contexts/location';
import { TrackProvider } from './src/contexts/track';

import { NavigationService } from './src/services';

import { AccountShowScreen } from './src/screens/account';
import { LoginScreen, RegistrationScreen } from './src/screens/authentication';
import {
  TrackCreateScreen,
  TrackShowScreen,
  TracksIndexScreen
} from './src/screens/track';

const TrackFlow = createStackNavigator({
  TrackShowScreen,
  TracksIndexScreen
});

TrackFlow.navigationOptions = {
  tabBarIcon: <MaterialIcons name='list' size={21} />,
  title: 'Tracks'
};

const Navigator = createSwitchNavigator({
  AuthenticationFlow: createStackNavigator({
    LoginScreen,
    RegistrationScreen
  }),
  MainFlow: createBottomTabNavigator({
    AccountShowScreen,
    TrackCreateScreen,
    TrackFlow
  })
});

const Container = createAppContainer(Navigator);

const App = () => (
  <AuthenticationProvider>
    <LocationProvider>
      <TrackProvider>
        <Container
          ref={navigator => NavigationService.setTopLevelNavigator(navigator)}
        />
      </TrackProvider>
    </LocationProvider>
  </AuthenticationProvider>
);

export default App;
