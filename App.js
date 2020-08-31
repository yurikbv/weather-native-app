import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={[ styles.textStyle, styles.largeText ]}>San Francisco</Text>
      <Text style={[ styles.textStyle, styles.smalltext]}>Light Cloud</Text>
      <Text style={[ styles.textStyle, styles.largeText]}>24°</Text>
      <TextInput 
        autoCorrect={false}
        placeholder="Select any city"
        placeholderTextColor="white"
        clearButtonMode="always"
        style={styles.textInput}
      />
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
  },
  textInput: {
    backgroundColor: '#666',
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center"
  }
});
