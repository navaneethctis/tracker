import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title, type }) => (
  <TouchableOpacity onPress={onPress} style={styles[`${type}Button`]()}>
    <Text style={styles[`${type}ButtonTitle`]()}>{title}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  type: 'primary'
};

const styles = StyleSheet.create({
  primaryButton() {
    return {
      backgroundColor: 'slateblue',
      borderRadius: 1,
      marginVertical: 3,
      paddingVertical: 11
    };
  },
  primaryButtonTitle() {
    return {
      color: 'white',
      fontSize: 13,
      textAlign: 'center',
      textTransform: 'uppercase'
    };
  },
  secondaryButton() {
    return {
      ...this.primaryButton(),
      backgroundColor: 'lavender'
    };
  },
  secondaryButtonTitle() {
    return {
      ...this.primaryButtonTitle(),
      color: 'slateblue'
    };
  }
});

export default Button;
