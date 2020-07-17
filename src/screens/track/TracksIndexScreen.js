import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Button, Styles, Title } from '../../components/layout';

import { TrackContext } from '../../contexts/track';

const TracksIndexScreen = ({ navigation }) => {
  const { indexTracks, state } = useContext(TrackContext);

  useEffect(() => {
    indexTracks();
  }, []);

  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={{ ...Styles.defaultScreen, marginTop: 19 }}
    >
      <Title style={styles.title} text='Tracks' />
      <FlatList
        data={state}
        keyExtractor={track => track._id}
        renderItem={({ item }) => (
          <Button
            onPress={() => navigation.navigate('TrackShowScreen', { item })}
            title={item.name}
          />
        )}
      />
    </SafeAreaView>
  );
};

TracksIndexScreen.navigationOptions = {
  cardStyle: { backgroundColor: 'white' },
  header: () => null
};

const styles = StyleSheet.create({});

export default TracksIndexScreen;
