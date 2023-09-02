import {StyleSheet, View, Text} from 'react-native';
import Chatbot from './src/components/Chatbot';
import Login from './src/components/Login';
import RegisterPage from './src/components/RegisterPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/components/LoginPage';
import AllDoctorsPage from './src/components/AllDoctorsPage';
import NavigationPanel from './src/components/NavigationPanel';
import SuggestedDoctors from './src/components/SuggestedDoctors';
import Header from './src/components/Header';
import Profile from './src/components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavigationPanel"
          component={NavigationPanel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chatbot"
          component={Chatbot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllDoctorsPage"
          component={AllDoctorsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuggestedDoctors"
          component={SuggestedDoctors}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
