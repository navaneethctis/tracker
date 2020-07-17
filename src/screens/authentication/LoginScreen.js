import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';

import { AuthenticationForm } from '../../components/authentication';
import { Button, Notification, Styles } from '../../components/layout';

import { AuthenticationContext } from '../../contexts/authentication';

const LoginScreen = ({ navigation }) => {
  const { authenticateUser, redirectUserIfAuthenticated, state } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    redirectUserIfAuthenticated();
  }, []);

  if (state.token === false) return null;

  return (
    <View style={Styles.centeredScreen}>
      <AuthenticationForm
        action='log-in'
        buttonTitle='Log In'
        onSubmit={authenticateUser}
        title='Login'
      />
      <Button
        onPress={() => navigation.navigate('RegistrationScreen')}
        title='Register Instead'
        type='secondary'
      />
      <Notification />
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: () => null
};

export default LoginScreen;
