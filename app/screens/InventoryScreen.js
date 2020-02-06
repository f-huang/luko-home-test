import React from 'react';
import { View, Text} from 'react-native';
import LargeTitle from "../components/LargeTitle";
import PlusButton from "../components/PlusButton";
import InventoryView from "../views/InventoryView";

class InventoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <LargeTitle title={"Inventory"}/>
          <PlusButton/>
        </View>
        <InventoryView/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: '12%',
    width: '100%',
  },
  topView: {
    width: '100%',
    padding: 16,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};


export default InventoryScreen;