import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Doctor = props => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={require('../assets/chatbot.png')} />
      <View>
        <Text style={styles.firstname}>{props.name}</Text>
        <Text style={styles.details}>{props.speciality}</Text>
        <Text style={styles.details}>{props.experience}</Text>
        <Text style={styles.details}>{props.address} years</Text>
        <Text style={styles.details}>{props.available}</Text>
        <Text style={styles.details}>{props.timings}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    height: '25%',
    width: '95%',
    backgroundColor: 'yellow',
    margin: 10,
  },

  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginLeft: 10,
  },

  firstname: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    margin: 5,
    marginLeft: 15,
  },

  details: {
    fontFamily: 'sans-serif',
    margin: 2,
    marginLeft: 15,
  },
});

export default Doctor;
