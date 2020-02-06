import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../constants/Colors";


class InventoryItem extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    photo: PropTypes.any,
    price: PropTypes.number,
  };

  render(){
    const { name, photo, price } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} alt={`photo-${name}`}
                source={photo}/>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price.toLocaleString()}€</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    width: '44%',
    height: 'auto',
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 124,
  },
  detailsContainer: {
    padding: 12,
    marginTop: 10,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
  },
  price: {
    marginTop: 12,
    fontSize: 12,
    color: Colors.gray,
  }
});

export default InventoryItem;