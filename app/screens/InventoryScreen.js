import React from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchBar } from 'react-native-elements';

import LargeTitle from "../components/LargeTitle";
import PlusButton from "../components/PlusButton";
import InventoryView from "../views/InventoryView";
import InventoryItemCategoryEnum from "../../model/InventoryItemCategoryEnum";
import cartierRing from "../assets/images/cartier_ring.png";
import {isStringNullOrEmpty} from "../tools/isStringNullOrEmpty";
import Colors from "../constants/Colors";

// Simulate data
const initialItems = [
  {
    name: "Cartier Ring",
    category: InventoryItemCategoryEnum.JEWELLERY,
    purchaseDate: Date(),
    price: 5780,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
  {
    name: "Lou.Yetu Necklace",
    category: InventoryItemCategoryEnum.JEWELLERY,
    purchaseDate: Date(),
    price: 60,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
  {
    name: "Chanel Pearl Bracelet",
    category: InventoryItemCategoryEnum.JEWELLERY,
    purchaseDate: Date(),
    price: 2100,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
  {
    name: "Messika Earrings",
    category: InventoryItemCategoryEnum.JEWELLERY,
    purchaseDate: Date(),
    price: 10090,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
  {
    name: "Chopard Watch",
    category: InventoryItemCategoryEnum.JEWELLERY,
    purchaseDate: Date(),
    price: 13420,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
];

class InventoryScreen extends React.Component {
  state = {
    inventoryList: initialItems,
    searchBarQuery: ""
  };

  handleSearchBarQuery = (value) => {
    const oldInventory = initialItems.filter(item => {
      return item.name.startsWith(value)
    });
    this.setState({ searchBarQuery: value, inventoryList: oldInventory });

  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <LargeTitle title={"Inventory"}/>
          <PlusButton onPress={() => navigate('CreateInventoryItem')}/>
        </View>
        <SearchBar inputContainerStyle={styles.searchBarInput}
                   containerStyle={styles.searchBarContainer}
                   onChangeText={this.handleSearchBarQuery}
                   value={this.state.searchBarQuery}
                   placeholderTextColor={Colors.gray}
                   placeholder={`Search ${this.state.inventoryList.length} items`}/>
        <InventoryView inventoryList={this.state.inventoryList}/>
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
  searchBarInput: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 16,
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 8,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  }

};


export default InventoryScreen;