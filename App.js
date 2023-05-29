import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';

export default function App() {
  return (
    <RegistrationScreen />
    // <View style={styles.container}>
    //   {/* <Text>Hello! Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <ViewBoxesWithColorAndText /> */}

    // </View>
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
