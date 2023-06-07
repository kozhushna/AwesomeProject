import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import CreatePostScreen from './src/Screens/CreatePostsScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            title: 'Registration',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Registration',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <MainStack.Screen
          name="Home"
          component={CreatePostScreen}
          options={{
            title: 'Публікації',
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
