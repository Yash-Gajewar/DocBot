import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import axios from 'axios';

export default function Chatbot() {
  const [userInput, setUserInput] = useState();
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState();

  const donePressed = async () => {
    symptoms.map((key, value) => {
      console.log(key);
    });

    try {
      axios
        .post('http://127.0.0.1:8000/api/predict_disease/getdisease', {
          symptoms: symptoms,
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleAddUserInput = () => {
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
            {symptoms.map((item, index) => {
              return <UserMessage key={index} text={item} />;
            })}

            {symptoms[0] ? (
              <TouchableOpacity onPress={donePressed} underlayColor="white">
                <View style={styles.ConfirmButton}>
                  <Text>Done</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Enter your symptoms here'}
          value={userInput}
          onChangeText={text => setUserInput(text)}
        />

        <TouchableOpacity onPress={() => handleAddUserInput()}>
          <View style={styles.addWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/send_message.png')}
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
    backgroundColor: '#54BFFC',
  },

  messageWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  items: {
    marginTop: 20,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#000',
    borderWidth: 1,
  },

  image: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollarea: {
    height: '85%',
  },

  ConfirmButton: {
    backgroundColor: '#fff',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginBottom: 50,
  },
});
