import {StyleSheet, View, Text} from 'react-native';
import Chatbot from './src/components/Chatbot';
import Login from './src/components/Login';
import Doctor from './src/components/Doctor';
import RegisterPage from './src/components/RegisterPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
