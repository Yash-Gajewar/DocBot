import {StyleSheet, View, Text} from 'react-native';
import Chatbot from './src/components/Chatbot';
import Login from './src/components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Chatbot />
      {/* <Login/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
