import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen';
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import LogOut from './src/Icons/LogOut.svg';
import ProfileScreen from './src/Screens/ProfileScreen';
import MapScreen from './src/Screens/MapScreen';
import CommentsScreen from './src/Screens/CommentsScreen';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Comments">
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
              title: 'Login',
              headerShown: false,
              headerTitleAlign: 'center',
            }}
          />

          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: 'Карта',
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

          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: 'Коментарі',
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

          <MainStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerShown: false,
              headerTitleAlign: 'center',
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Create') {
                return (
                  <Ionicons
                    name={focused ? 'ios-list-box' : 'ios-list'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
          })}
        >
          <Tab.Screen name="Home" component={PostsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
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
