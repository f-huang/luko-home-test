import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../constants/Colors";


class LargeTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: ""
  };

  render = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{this.props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginTop: '12%',
    marginLeft: '4%',
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 38
  }
});


export default LargeTitle;