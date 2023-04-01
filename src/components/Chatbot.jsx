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
  const [description, setDiscription] = useState();
  const [treatment1, setTreatment1] = useState();
  const [treatment2, setTreatment2] = useState();
  const [treatment3, setTreatment3] = useState();
  const [treatment4, setTreatment4] = useState();
  const [error, setError] = useState(false);

  const donePressed = async () => {
    symptoms.map((value, key) => {
      console.log(value);
    });

    try {
      axios
        .post('http://192.168.0.106:8000/api/predict_disease/getdisease', {
          symptoms: symptoms,
        })
        .then(response => {
          console.log(response.data);
          setPrediction(response.data['Disease']);
          setDiscription(response.data['Description']);
          setTreatment1(response.data['Treatment1']);
          setTreatment2(response.data['Treatment2']);
          setTreatment3(response.data['Treatment3']);
          setTreatment4(response.data['Treatment4']);
        })
        .catch(error => {
          console.log(error);
          setError(true);
          setSymptoms([]);
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
            <BotMessage text="Click on Done once finished" />

            {symptoms.map((item, index) => {
              return <UserMessage key={index} text={item} />;
            })}

            {error ? (
              <View>
                <BotMessage
                  text={
                    "Sorry we couldn't predict that can you please provide more precise symptoms"
                  }
                />
              </View>
            ) : (
              <></>
            )}

            {symptoms[0] ? (
              <TouchableOpacity onPress={donePressed} underlayColor="white">
                <View style={styles.ConfirmButton}>
                  <Text>Done</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}

            {prediction ? (
              <View>
                <BotMessage
                  text={`We believe you have acquired  ${prediction}`}
                />
                <BotMessage text={description} />
                <BotMessage text="Suggested Treatments are " />
                <BotMessage text={treatment1} />
                <BotMessage text={treatment2} />
                <BotMessage text={treatment3} />
                <BotMessage text={treatment4} />
              </View>
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
    marginBottom: 5,
  },
});
