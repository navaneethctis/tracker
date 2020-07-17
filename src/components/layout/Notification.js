import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { AuthenticationContext } from '../../contexts/authentication';

const Notification = () => {
  const { clearNotification, state } = useContext(AuthenticationContext);

  if (!state.notification) return null;

  const { message, type } = state.notification;

  return (
    <TouchableOpacity
      onPress={clearNotification}
      style={styles[`${type}Notification`]()}
    >
      <Text style={styles.message}>{message} </Text>
    </TouchableOpacity>
  );
};

Notification.defaultProps = {
  type: 'error'
};

const styles = StyleSheet.create({
  errorNotification() {
    return {
      backgroundColor: 'palevioletred',
      borderBottomRightRadius: 19,
      borderTopRightRadius: 19,
      bottom: 21,
      paddingLeft: 7,
      paddingRight: 17,
      paddingVertical: 3,
      position: 'absolute'
    };
  },
  message: {
    color: 'white',
    fontSize: 13,
    fontStyle: 'italic'
  }
});

export default Notification;
