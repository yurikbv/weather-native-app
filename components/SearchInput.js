import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native'

export default function SearchInput({placeholder}) {
    return (
        <View style={styles.container}>
            <TextInput 
                autoCorrect={false}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                placeholderTextColor="white"
                clearButtonMode="always"
                style={styles.textInput}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        height: 40,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textInput: {
        flex: 1,
        color: 'white'
    }
})