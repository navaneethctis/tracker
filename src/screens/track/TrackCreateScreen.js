import React, { useCallback, useContext } from 'react';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { Map, TrackForm } from '../../components/track';

import { LocationContext } from '../../contexts/location';

import { useLocation } from '../../hooks';

import '../../_locationChanger';

const TrackCreateScreen = ({ isFocused }) => {
  const { setCurrentLocation, state } = useContext(LocationContext);

  const startTracking = useCallback(
    location => {
      setCurrentLocation(state.isRecording, location);
    },
    [state.isRecording]
  );

  useLocation(isFocused || state.isRecording, startTracking);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Map
        locations={state.locations}
        currentLocation={state.currentLocation}
      />
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  tabBarIcon: <MaterialIcons name='add' size={21} />,
  title: 'Create'
};

export default withNavigationFocus(TrackCreateScreen);
