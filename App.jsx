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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="NavigationPanel" component={NavigationPanel} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="AllDoctorsPage" component={AllDoctorsPage} />
        <Stack.Screen name="SuggestedDoctors" component={SuggestedDoctors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
