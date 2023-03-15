import { StyleSheet, View, Text } from "react-native";
import Chatbot from "./src/components/Chatbot";

export default function App() {
  return (
    <View style={styles.container}>
      <Chatbot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
