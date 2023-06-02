import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
// import { useFonts } from 'expo-font';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // const [fontsLoaded] = useFonts({
  //   Roboto: require('../Fonts/Roboto-Black.ttf'),
  //   // RobotoMedium: require('../Fonts/Roboto-Medium.ttf'),
  // });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            onChangeText={setEmail}
            value={email}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.inputPassword]}
              placeholder="Пароль"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />

            <TouchableHighlight style={styles.linkShowPassword}>
              <Text style={styles.linkText}>Показати</Text>
            </TouchableHighlight>
          </View>

          <Pressable
            title="Sign Up"
            style={styles.button}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>Зареєструватись</Text>
          </Pressable>
          <View style={styles.holder}>
            <Text style={styles.linkText}>Вже є акаунт?</Text>
            <TouchableHighlight>
              <Text style={styles.linkText}>Увійти</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 490,
    paddingBottom: 111,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    marginBottom: 32,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
    color: '#212121',
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputPassword: {
    marginBottom: 0,
  },
  button: {
    paddingVertical: 15,
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  holder: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  linkText: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    color: '#1B4371',
  },

  linkShowPassword: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  passwordContainer: {
    marginBottom: 43,
  },
});

export default SignUpForm;
