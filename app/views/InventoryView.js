import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import InventoryItemCategoryEnum from "../../model/InventoryItemCategoryEnum";
import InventoryItem from "../components/InventoryItem";
import Colors from "../constants/Colors";

import cartierRing from "../assets/images/cartier_ring.png";

const inventoryList = [
  {
    name: "Cartier Ring",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 5780,
    description: "",
    photo: cartierRing,
    invoice: null,
  },
  {
    name: "Lou.Yetu Necklace",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 60,
    description: "",
    photo: "https://facebook.github.io/react-native/img/tiny_logo.png",
    invoice: null,
  },
  {
    name: "Chanel Pearl Bracelet",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 2100,
    description: "",
    photo: "https://facebook.github.io/react-native/img/tiny_logo.png",
    invoice: null,
  },
  {
    name: "Messika Earrings",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 10090,
    description: "",
    photo: "https://facebook.github.io/react-native/img/tiny_logo.png",
    invoice: null,
  },
  {
    name: "Chopard Watch",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 13420,
    description: "",
    photo: "https://facebook.github.io/react-native/img/tiny_logo.png",
    invoice: null,
  },
];

getInventoryItems = (inventoryList) => {
  let items = [];
  inventoryList.forEach(item => {
    items.push(<InventoryItem key={item.name} name={item.name} photo={item.photo} price={item.price}/>)
  });
  return items;
};

class InventoryView extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} automaticallyAdjustContentInsets={true}>
        {getInventoryItems(inventoryList)}
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
    marginTop: 20,
    backgroundColor: Colors.backgroundColor,
  }
});


export default InventoryView;
