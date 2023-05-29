import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const LoadImageButton = () => {
  return (
    <Pressable
      style={styles.button}
      title="Press Me"
      onPress={() => console.log('Button pressed!')}
      color="white"
    >
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 91,
    left: 120,
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '#FF6C00',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoadImageButton;
