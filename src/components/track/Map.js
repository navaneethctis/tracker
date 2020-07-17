import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';

const Map = ({ locations, currentLocation }) => {
  if (!currentLocation)
    return <ActivityIndicator size='large' style={{ marginTop: 19 }} />;

  return (
    <MapView
      initialRegion={{
        latitude: 11.3071712,
        latitudeDelta: 0.01,
        longitude: 75.7981144,
        longitudeDelta: 0.01
      }}
      style={styles.map}
    >
      <Circle
        center={{ ...currentLocation.coords }}
        fillColor='rgba(106, 90, 205, 0.3)'
        radius={25}
        strokeColor='rgba(106, 90, 205, 1)'
      />
      <Polyline coordinates={locations.map(location => location.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 301
  }
});

export default Map;
