import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.holder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  holder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default MapScreen;
