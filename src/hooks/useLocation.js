import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';
import { useEffect } from 'react';

const useLocation = (shouldTrack, handleChangeLocation) => {
  useEffect(() => {
    let subscriber = null;

    const trackLocation = async () => {
      try {
        const { granted } = await requestPermissionsAsync();

        if (!granted) throw new Error();

        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            distanceInterval: 10,
            timeInterval: 1000
          },
          location => handleChangeLocation(location)
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (shouldTrack) trackLocation();
    else {
      if (subscriber) subscriber.remove();

      subscriber = null;
    }

    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, handleChangeLocation]);
};

export default useLocation;
