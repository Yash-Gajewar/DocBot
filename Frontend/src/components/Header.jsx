import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Header = props => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AllDoctorsPage');
        }}>
        <Image style={styles.image} source={require('../assets/user.png')} />
      </TouchableOpacity>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>D</Text>
        <Text style={styles.subheading}>oc</Text>
        <Text style={styles.heading}>B</Text>
        <Text style={styles.subheading}>ot</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    borderTopWidth: 0.2,
    backgroundColor: '#ECF7FF',
  },

  image: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginLeft: 10,
  },

  headingContainer: {
    marginLeft: 100,
    alignItems: 'center',
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  heading: {
    fontSize: 24,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 900,
    color: '#042E49',
  },
  subheading: {
    fontSize: 24,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 900,
    color: '#00465D',
  },
});

export default Header;
