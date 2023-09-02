import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import {backendUrl} from '../establish_connection';

function LoginPage({navigation}) {
  const submitPressed = async () => {
    try {
      axios
        .get(
          `${backendUrl}/api/user/userexists?email=${email}&password=${password}`,
        )
        .then(response => {
          console.log(response.data);
          if (response.data['SUCCESS'] == 'TRUE') {
            Alert.alert('SUCCESS');
            setTimeout(() => {
              navigation.navigate('AllDoctorsPage');
            }, 3000);
          } else {
            Alert.alert('Invalid Email/Password');
          }
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Invalid Email/Password');
        });
    } catch (ex) {
      console.log(ex);
    }
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>DocBot</Text>
        <Image style={styles.image} source={require('../assets/chatbot.png')} />
      </View>
      <View style={styles.conatiner}>
        <Text style={styles.text}>Email Id</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Id"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={submitPressed}>
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },

  image: {
    width: 50,
    height: 50,
  },

  header: {
    alignItems: 'center',
    bottom: '2%',
  },

  conatiner: {
    width: 315,
    height: 375,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fffff',
    borderWidth: 0.2,
    padding: 10,
    marginBottom: 100,
  },

  text: {
    margin: 15,
  },

  textInput: {
    padding: 15,
    borderWidth: 0.2,
    width: '90%',
    marginLeft: 15,
  },

  button: {
    backgroundColor: '#54BFFC',
    width: '55%',
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default LoginPage;
