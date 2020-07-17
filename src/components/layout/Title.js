import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({ text }) => <Text style={styles.title}>{text}</Text>;

const styles = StyleSheet.create({
  title: {
    borderBottomColor: 'slateblue',
    borderBottomWidth: 1,
    color: 'slateblue',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    paddingBottom: 3,
    textAlign: 'right',
    textTransform: 'uppercase'
  }
});

export default Title;
