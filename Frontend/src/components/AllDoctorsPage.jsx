import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import axios, {all} from 'axios';
import Doctor from './Doctor';
import NavigationPanel from './NavigationPanel';
import Header from './Header';
import Profile from './Profile';
import {backendUrl} from '../establish_connection';

function AllDoctorsPage({navigation}) {
  const [search, setSearch] = useState();
  const [allDoctors, setAllDoctors] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/doctor/getalldoctors`,
      );
      setAllDoctors(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const closePressed = () => {
    setSearch();
    getdata();
  };

  const searchPressed = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/doctor/getspecificdoctors?type=${search}`,
      );
      setAllDoctors(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  React.useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <View style={styles.root}>
        <Header />

        <View style={styles.input}>
          <TouchableOpacity onPress={searchPressed}>
            <Image
              style={styles.image}
              source={require('../assets/search_symbol.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={setSearch}
            value={search}
            placeholder="search disease"
          />
          {search ? (
            <TouchableOpacity onPress={closePressed}>
              <Image
                style={styles.close}
                source={require('../assets/close.png')}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        <ScrollView style={styles.scrollArea}>
          {allDoctors.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Doctor
                  Timings={item['Timings']}
                  available={item['available']}
                  experience={item['experience']}
                  location={item['location']}
                  name={item['name']}
                  speciality={item['speciality']}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <NavigationPanel navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ECF7FF',
  },

  scrollArea: {
    width: '100%',
    padding: 10,
  },

  input: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '92%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 20,
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  image: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },

  close: {
    marginTop: 2,
    height: 15,
    width: 15,
  },

  textInput: {
    height: 45,
    width: '90%',
    flex: 1,
    bottom: 12,
    marginLeft: 15,
  },
});

export default AllDoctorsPage;
