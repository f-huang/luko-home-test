import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import InventoryItem from "../components/InventoryItem";
import Colors from "../constants/Colors";
import PropTypes from 'prop-types';

getInventoryItems = (inventoryList) => {
  let items = [];
  inventoryList.forEach(item => {
    items.push(<InventoryItem key={item.name} name={item.name} photo={item.photo} price={item.price}/>)
  });
  return items;
};

class InventoryView extends React.Component {
  static propTypes = {
    inventoryList: PropTypes.array,
  };
  static defaultProps = {
    inventoryList: []
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} automaticallyAdjustContentInsets={true}>
        {getInventoryItems(this.props.inventoryList)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    minHeight: 800,
    marginTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
  }
});


export default InventoryView;
