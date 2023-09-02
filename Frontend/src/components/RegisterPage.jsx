import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import {backendUrl} from '../establish_connection';

function RegisterPage({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerPressed = async () => {
    if (password == confirmPassword) {
      try {
        axios
          .post(`${backendUrl}/api/user/createuser`, {
            email: email,
            password: password,
          })
          .then(response => {
            console.log(response.data);
            if (response.data['SUCCESS'] == 'TRUE') {
              Alert.alert('Registeration Successfull');
              setTimeout(() => {
                navigation.navigate('AllDoctorsPage');
              }, 4000);
            } else {
              Alert.alert('Email already exists');
            }
          })
          .catch(error => {
            console.log(error);
            Alert.alert('Email already exists');
          });
      } catch (ex) {
        console.log(ex);
      }
    } else {
      Alert.alert("Confirm Password doesn't match");
    }
  };

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
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={registerPressed}>
          <View>
            <Text>Register</Text>
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

export default RegisterPage;
