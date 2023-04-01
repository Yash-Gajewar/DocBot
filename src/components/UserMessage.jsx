import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const UserMessage = props => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image
            style={styles.square}
            source={require('../assets/chatbot.png')}
          />
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserMessage;

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-end',
  },

  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '75%',
    borderColor: '000',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flextWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
  },
  itemText: {
    maxWidth: '95%',
    marginLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
