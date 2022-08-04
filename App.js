import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import SplashScreen from './Screens/SplashScreen';
import SmartHome from './Screens/SmartHome';
import HomeLight from './Screens/HomeLight';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="SplashScreen">
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SmartHome" component={SmartHome} />
    <Stack.Screen name="HomeLight"  options={{headerShown: false}} component={HomeLight} />

    {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
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
