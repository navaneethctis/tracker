import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';

import { Button, TextInput, Title } from '../../components/layout';

const TrackShowScreen = ({ navigation }) => {
  const track = navigation.getParam('item');

  if (!track) return null;

  const startedAt = new Date(track.locations[0].timestamp);
  const stoppedAt = new Date(
    track.locations[track.locations.length - 1].timestamp
  );

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <MapView
        initialRegion={{
          ...track.locations[0].coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(location => location.coords)}
        />
      </MapView>
      <View style={{ paddingHorizontal: 19, paddingTop: 19 }}>
        <Title text={track.name} />
        <TextInput label='From' value={startedAt.toUTCString()} />
        <TextInput label='To' value={stoppedAt.toUTCString()} />
        <Button
          onPress={() => navigation.navigate('TracksIndexScreen')}
          title='Go Back'
        />
      </View>
    </SafeAreaView>
  );
};

TrackShowScreen.navigationOptions = {
  cardStyle: { backgroundColor: 'white' },
  header: () => null
};

const styles = StyleSheet.create({
  map: {
    height: 301
  }
});

export default TrackShowScreen;
