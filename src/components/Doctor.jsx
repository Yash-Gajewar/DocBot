import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Doctor = props => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={require('../assets/doctor.png')} />
      <View>
        <Text style={styles.firstname}>{props['name']}</Text>
        <Text style={styles.details}>{props['speciality']}</Text>
        <Text style={styles.details}>{props['experience']} years</Text>
        <Text style={styles.details}>{props['location']}</Text>
        <Text style={styles.details}>{props['available']}</Text>
        <Text style={styles.details}>{props['Timings']}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    height: 200,
    width: '97%',
    margin: 5,
    backgroundColor: '#54BFFC',
    borderRadius: 5,
  },

  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginLeft: 10,
  },

  firstname: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    marginTop: 15,
    marginLeft: 15,
    color: '#ffff',
  },

  details: {
    fontFamily: 'sans-serif',
    margin: 3,
    marginLeft: 15,
    color: '#ffff',
  },
});

export default Doctor;
