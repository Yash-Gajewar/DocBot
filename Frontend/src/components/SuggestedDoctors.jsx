import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Doctor from './Doctor';
import NavigationPanel from './NavigationPanel';
import {backendUrl} from '../establish_connection';

const SuggestedDoctors = props => {
  const {prediction} = props.route.params;
  const [suggestedDoctors, setSuggestedDoctors] = useState([]);

  const getSuggestedDoctors = async () => {
    try {
      console.log(props.prediction);
      const response = await axios.get(
        `${backendUrl}/api/doctor/getspecificdoctors?type=${prediction}`,
      );
      setSuggestedDoctors(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  React.useEffect(() => {
    console.log('Suggested Doctors: ' + prediction);
    getSuggestedDoctors();
  }, []);

  return (
    <>
      <View style={styles.root}>
        <View>
          <Text style={styles.heading}>Suggested Doctors</Text>
        </View>

        <ScrollView style={styles.scrollArea}>
          {prediction ? (
            suggestedDoctors.map((item, index) => {
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
            })
          ) : (
            <View>
              <Text style={styles.optionalText}>No Suggested Doctors</Text>
            </View>
          )}
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
    backgroundColor: '#ffffff',
  },

  scrollArea: {
    width: '100%',
  },

  heading: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',

    color: '#042E49',
  },

  optionalText: {
    marginLeft: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default SuggestedDoctors;
