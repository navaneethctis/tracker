import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, TextInput, Title } from '../layout';

import { LocationContext } from '../../contexts/location';

import { useSaveTrack } from '../../hooks';

const TrackForm = () => {
  const { setName, startRecording, state, stopRecording } = useContext(
    LocationContext
  );

  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.main}>
      <Title text='Create' />
      <TextInput label='Title' onChangeText={setName} value={state.name} />
      {state.isRecording ? (
        <Button
          onPress={stopRecording}
          title='Stop Recording'
          type='secondary'
        />
      ) : (
        <Button onPress={startRecording} title='Start Recording' />
      )}
      {!state.isRecording && state.locations.length ? (
        <Button onPress={saveTrack} title='Save Track' type='secondary' />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 19
  }
});

export default TrackForm;
