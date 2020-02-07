import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../constants/Colors";
import {isStringNullOrEmpty} from "../tools/isStringNullOrEmpty";

class AddFileOrPhotoButton extends React.Component {
  static propTypes = {
    alt: PropTypes.string,
    imageUri: PropTypes.string,
    buttonPurpose: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    imageUri: null,
    alt: null,
    buttonPurpose: AddFileOrPhotoButton.ButtonPurpose.ADD_PHOTO,
  };

  static get ButtonPurpose() {
    return {
      ADD_FILE: 'Add file',
      ADD_PHOTO: 'Add photo'
    }
  };

  render() {
    const textLabel = this.props.buttonPurpose;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onChange} alt={this.props.alt}>
          <Image style={styles.image} source={{ uri: this.props.imageUri }}/>
          { isStringNullOrEmpty(this.props.imageUri) &&  <Text style={styles.text}>{textLabel}</Text> }
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    width: 120,
    height: 120,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.white,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    bottom: 12
  }

});

export default AddFileOrPhotoButton;