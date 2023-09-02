import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Doctor = props => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={require('../assets/doctor.png')} />
      <View>
        <Text style={styles.years}>
          {props['experience']}+ years experience
        </Text>
        <Text style={styles.firstname}>{props['name']}</Text>
        <Text style={styles.details}>
          {props['speciality'].length > 20
            ? props['speciality'].slice(0, 20) + '...'
            : props['speciality']}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    height: 150,
    width: '97%',
    margin: 5,
    backgroundColor: '#BCE5FF',
    borderRadius: 5,
    borderRadius: 30,
  },

  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginLeft: 10,
  },

  firstname: {
    fontWeight: '900',
    fontFamily: 'Roboto',
    marginTop: 10,
    marginLeft: 15,
    fontSize: 16,
    color: '#042E49',
  },

  details: {
    fontFamily: 'Roboto',
    margin: 3,
    marginLeft: 15,
    fontSize: 14,
    color: '#042E49',
  },

  years: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 14,
    fontFamily: 'Roboto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 200,
    height: 30,
    padding: 2,
    paddingLeft: 10,
    color: '#042E49',
  },
});

export default Doctor;
