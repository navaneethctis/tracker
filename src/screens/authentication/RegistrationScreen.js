import React, { useContext } from 'react';
import { View } from 'react-native';

import { AuthenticationForm } from '../../components/authentication';
import { Button, Notification, Styles } from '../../components/layout';

import { AuthenticationContext } from '../../contexts/authentication';

const RegistrationScreen = ({ navigation }) => {
  const { authenticateUser } = useContext(AuthenticationContext);

  return (
    <View style={Styles.centeredScreen}>
      <AuthenticationForm
        action='register'
        buttonTitle='Register'
        onSubmit={authenticateUser}
        title='Registration'
      />
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        title='Log In Instead'
        type='secondary'
      />
      <Notification />
    </View>
  );
};

RegistrationScreen.navigationOptions = {
  header: () => null
};

export default RegistrationScreen;
