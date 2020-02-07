import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";

class PlusButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.value} {...this.props}>+</Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  button: {
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    padding: 2,
    borderRadius: 50,
  },
  value: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  }
};

export default PlusButton;