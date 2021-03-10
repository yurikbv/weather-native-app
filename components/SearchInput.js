import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class SearchInput extends React.Component {

	state = {
		text: ''
	}
	
  handleChangeText = (text) => {
    this.setState({text});
  };
  
  handleSubmitEditing = () => {
    if (!this.state.text) return false;
    this.props.onSubmit(this.state.text);
    this.setState({text: ''})
  }

  render() {

		const { placeholder } = this.props;
		const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          clearButtonMode="always"
          style={styles.textInput}
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
					value={text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
