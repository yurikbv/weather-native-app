import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import SearchInput from './components/SearchInput';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={[ styles.textStyle, styles.largeText ]}>San Francisco</Text>
      <Text style={[ styles.textStyle, styles.smalltext]}>Light Cloud</Text>
      <Text style={[ styles.textStyle, styles.largeText]}>24°</Text>
      
      <SearchInput placeholder="Seacrh any city"/>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText: {
    fontSize: 44
  },
  smalltext: {
    fontSize: 18
  }
});
