import React from 'react';

import FormContainer from '../Components/FormContainer';
import LoginForm from '../Components/LoginForm';
import { useAuth } from '../Redux/useAuth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { isLoggedIn, user } = useAuth();

  if (isLoggedIn) {
    navigation.navigate('Home');
  }
  return (
    <FormContainer>
      <LoginForm />
    </FormContainer>
  );
};

export default LoginScreen;
