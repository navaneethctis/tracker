import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { AuthenticationContext } from '../../contexts/authentication';

import { Button, TextInput, Title } from '../layout';

const AuthenticationForm = ({ action, buttonTitle, onSubmit, title }) => {
  const { clearNotification } = useContext(AuthenticationContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmailAddress('');
    setPassword('');

    clearNotification();
  };

  return (
    <View>
      <NavigationEvents onWillFocus={resetForm} />
      <Title text={title} textAlign='right' />
      <TextInput
        label='Email Address'
        onChangeText={setEmailAddress}
        value={emailAddress}
      />
      <TextInput
        label='Password'
        onChangeText={setPassword}
        secureTextEntry
        value={password}
      />
      <Button
        onPress={() => onSubmit(action, { emailAddress, password })}
        title={buttonTitle}
      />
    </View>
  );
};

export default AuthenticationForm;
