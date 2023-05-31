import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import PhotoBG from '../Images/PhotoBG.png';
import SignUpForm from '../Components/SignUpForm';

const RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.image}>
      <View style={styles.formContainer}>
        <SignUpForm />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default RegistrationScreen;