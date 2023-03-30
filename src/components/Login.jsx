import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function Login() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>DocBot</Text>
        <Image style={styles.image} source={require('../assets/chatbot.png')} />
      </View>
      <View style={styles.button}>
        <Text>Register</Text>
      </View>
      <View style={styles.button}>
        <Text>Login</Text>
      </View>
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
