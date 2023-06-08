import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen';
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import LogOut from './src/Icons/LogOut.svg';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Create">
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
          component={PostsScreen}
          options={{
            title: 'Публікації',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0, 0, 0, 0.3)',
            },
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 17,
              lineHeight: 22,
            },
            headerLeft: () => null,
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  style={styles.button}
                  title="Log Out"
                  onPress={() => navigation.navigate('Login')}
                  color="white"
                >
                  <View style={styles.buttonContainer}>
                    <LogOut width={24} height={24} />
                  </View>
                </TouchableOpacity>
              );
            },
          }}
        />

        <MainStack.Screen
          name="Create"
          component={CreatePostsScreen}
          options={{
            title: 'Створити публікацію',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0, 0, 0, 0.3)',
            },
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 17,
              lineHeight: 22,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
