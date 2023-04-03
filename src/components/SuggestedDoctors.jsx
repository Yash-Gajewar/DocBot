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
import axios from 'axios';
import Doctor from './Doctor';
import NavigationPanel from './NavigationPanel';

const SuggestedDoctors = props => {
  const [allDoctors, setAllDoctors] = useState([]);

  const getdata = async () => {
    try {
      console.log(props.prediction);
      const response = await axios.get(
        `http://192.168.0.106:8000/api/doctor/getspecificdoctors?type=${props.prediction}`,
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
        <View>
          <Text style={styles.heading}>Suggested Doctors</Text>
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
        <NavigationPanel navigation={props.navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  scrollArea: {
    width: '100%',
  },

  heading: {
    marginLeft: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SuggestedDoctors;
