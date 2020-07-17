import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Styles, Title } from '../../components/layout';

import { AuthenticationContext } from '../../contexts/authentication';

const AccountShowScreen = () => {
  const { logOutUser } = useContext(AuthenticationContext);

  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={{ ...Styles.defaultScreen, marginTop: 19 }}
    >
      <Title text='Account' />
      <Button onPress={logOutUser} title='Log Out' />
    </SafeAreaView>
  );
};

AccountShowScreen.navigationOptions = {
  tabBarIcon: <MaterialIcons name='person' size={21} />,
  title: 'Account'
};

export default AccountShowScreen;
