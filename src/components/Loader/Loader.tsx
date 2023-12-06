import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {LoadingState} from '../../redux/types';

const Loader = ({loading}: {loading: LoadingState}) => {
  if (loading === LoadingState.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#0000ff" testID="data_loader" />
      </View>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
