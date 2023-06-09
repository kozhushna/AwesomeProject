import {
  NavigationContainer,
  createAppContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../Screens/PostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import LogOut from '../Icons/LogOut.svg';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="HomeTab"
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
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

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

export default TabNavigator;
