import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, Text, KeyboardAvoidingView, Platform, ActivityIndicator, StatusBar } from 'react-native';

import { fetchLocationId, fetchWeather } from "./utils/api";
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';


export default function App() {

  const [location, setLocation] = useState("San Francisco");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState('Clear');
  
  const handleUpdateLocation = async (city) => {
    if (!city) return;
    setLoading(true);
    try {
      const locationId = await fetchLocationId(city);
      const {location, weather, temperature} = await fetchWeather(locationId);
      setLoading(false);
      setError(false);
      setLocation(location);
      setWeather(weather);
      setTemperature(temperature);
    }catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />
          
          {!loading && (
            <View>
              
              {error && (
                <Text style={[styles.smallText, styles.textAlign]}>
                  Could not load weather, please try a different city
                </Text>
              )}
              {!error && (
                <View>
                  <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
                  <Text style={[styles.textStyle, styles.smallText]}>{weather}</Text>
                  <Text style={[styles.textStyle, styles.largeText]}>{Math.round(temperature)}°</Text>
                </View>
              )}
            </View>
          )}
          
          <SearchInput placeholder="Search any city" onSubmit={handleUpdateLocation}/>

        </View>

      </ImageBackground>
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
  smallText: {
    fontSize: 18
  }
});
