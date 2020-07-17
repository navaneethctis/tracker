import React from 'react';
import { StyleSheet, Text, TextInput as Input, View } from 'react-native';

const TextInput = ({ label, onChangeText, secureTextEntry, value }) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      value={value}
    />
  </View>
);

TextInput.defaultProps = {
  secureTextEntry: false
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 3,
    paddingHorizontal: 7,
    paddingVertical: 3
  },
  label: {
    color: 'dimgray',
    fontSize: 11,
    textTransform: 'uppercase'
  }
});

export default TextInput;
