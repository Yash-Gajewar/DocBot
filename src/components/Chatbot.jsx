import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

export default function Chatbot() {
  const [userInput, setUserInput] = useState();
  const [symptoms, setSymptoms] = useState([]);
  const handleAddUserInput = () => {
    Keyboard.dismiss();
    setSymptoms([...symptoms, userInput]);
    setUserInput(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageWrapper}>
        <Text style={styles.sectionTitle}>Conversation with DocBot</Text>
        <ScrollView style={styles.scrollarea}>
        <View style={styles.items}>
          <BotMessage text="Hello! This is DocBot" />
          <BotMessage text="Please Enter your symptoms here" />
          {
            symptoms.map((item , index) => {
             return <UserMessage key = {index} text={item } />
            })
          }
        </View>
        </ScrollView>
      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Enter your symptoms here"}
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
        />

        <TouchableOpacity onPress={() => handleAddUserInput()}>
          <View style={styles.addWrapper}>
            <Image
              style={styles.image}
              source={require("../assets/send_message.png")}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#54BFFC",
  },

  messageWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color:'#fff'
  },

  items: {
    marginTop: 20,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#000",
    borderWidth: 1,
  },

  image: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollarea:{
    height: '85%'
  }

});
