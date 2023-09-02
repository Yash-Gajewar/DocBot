import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

function Login({navigation}) {
  const registerPressed = () => {
    navigation.navigate('RegisterPage');
  };

  const loginPressed = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>DocBot</Text>
        <Image style={styles.image} source={require('../assets/chatbot.png')} />
      </View>
      <TouchableOpacity style={styles.button} onPress={registerPressed}>
        <View>
          <Text>Register</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginPressed}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    bottom: '15%',
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

  button: {
    backgroundColor: '#54BFFC',
    width: '35%',
    height: '6%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
});

export default Login;
