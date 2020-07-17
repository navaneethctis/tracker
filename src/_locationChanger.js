import * as Location from 'expo-location';

const getChangedLocation = (increment, timestamp) => ({
  coords: {
    accuracy: 5,
    altitude: 5,
    altitudeAccuracy: 5,
    heading: 0,
    latitude: 11.3071712 + increment * 0.0001,
    longitude: 75.7981144 + increment * 0.0001,
    speed: 0
  },
  timestamp
});

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    location: getChangedLocation(counter, Date.now()),
    watchId: Location._getCurrentWatchId()
  });

  counter++;
}, 1000);
