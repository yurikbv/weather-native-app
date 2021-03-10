import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, Text, KeyboardAvoidingView, Platform } from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';


export default function App() {

  const [location, setLocation] = useState("San Francisco")
  
  const handleUpdateLocation = (city) => {
    setLocation(city);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={getImageForWeather("Clear")}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>

          <Text style={[ styles.textStyle, styles.largeText ]}>{location}</Text>
          <Text style={[ styles.textStyle, styles.smalltext]}>Light Cloud</Text>
          <Text style={[ styles.textStyle, styles.largeText]}>24°</Text>
          
          <SearchInput placeholder="Search any city" onSubmit={handleUpdateLocation}/>

        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white'
  },
  largeText: {
    fontSize: 44
  },
  smalltext: {
    fontSize: 18
  }
});
