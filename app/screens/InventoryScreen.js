import React from 'react';
import { View, Text} from 'react-native';
import LargeTitle from "../components/LargeTitle";

class InventoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LargeTitle title={"Inventory"}/>
        <InventoryScreen/>
      </View>
    )
  }
}

const styles = {
  container: { flex: 1 }
};


export default InventoryScreen;