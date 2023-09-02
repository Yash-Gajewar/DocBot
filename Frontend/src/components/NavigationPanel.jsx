import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const NavigationPanel = props => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AllDoctorsPage');
        }}>
        <Image style={styles.image} source={require('../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Chatbot');
        }}>
        <Image style={styles.image} source={require('../assets/chatbot.png')} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('navigation panel: ' + props.prediction);
          props.navigation.navigate('SuggestedDoctors', {
            prediction: `${props.prediction}`,
          });
        }}>
        <Image
          style={styles.image}
          source={require('../assets/doctor_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '8%',
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  image: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
});

export default NavigationPanel;
