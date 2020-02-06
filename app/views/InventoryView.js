import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import InventoryItemCategoryEnum from "../../model/InventoryItemCategoryEnum";


const inventoryList = [
  {
    name: "Cartier Ring",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 5780,
    description: "",
    photo: null,
    invoice: null,
  },
  {
    name: "Lou.Yetu Necklace",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 60,
    description: "",
    photo: null,
    invoice: null,
  },
  {
    name: "Chanel Pearl Bracelet",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 2100,
    description: "",
    photo: null,
    invoice: null,
  },
  {
    name: "Messika Earrings",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 10090,
    description: "",
    photo: null,
    invoice: null,
  },
  {
    name: "Chopard Watch",
    category: InventoryItemCategoryEnum.JEWELLERY,
    dateBought: Date(),
    price: 13420,
    description: "",
    photo: null,
    invoice: null,
  },
];

getInventoryItems = (inventoryList) => {
  let items = [];
  inventoryList.forEach(item => {

  });
  return items;
};

const view = (
  <ScrollView style={styles.container}>
    {getInventoryItems()}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: '1',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  }
});


export default view;
