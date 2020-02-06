import React from 'react';
import { View, Text} from 'react-native';
import LargeTitle from "../components/LargeTitle";
import InventoryView from "../views/InventoryView";

class InventoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LargeTitle title={"Inventory"}/>
        <InventoryView/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    width: '100%',
  }
};


export default InventoryScreen;