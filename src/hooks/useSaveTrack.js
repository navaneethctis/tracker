import { useContext } from 'react';

import { LocationContext } from '../contexts/location';
import { TrackContext } from '../contexts/track';

import { NavigationService } from '../services';

const useSaveTrack = () => {
  const {
    resetForm,
    state: { locations, name }
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = () => {
    createTrack({ locations, name });

    resetForm();

    NavigationService.navigate('TrackFlow');
  };

  return [saveTrack];
};

export default useSaveTrack;
