import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';
import Colors from "../constants/Colors";


const Category = t.enums({
  ARTS: 'Arts',
  ELECTRONICS: 'Electronics',
  JEWELLERY: 'Jewellery',
  MUSIC_INSTRUMENT: 'Music Instrument'
});

const InventoryItem = t.struct({
  name: t.String,
  category: Category,
  purchaseDate: t.Date,
  price: t.Number,
  description: t.maybe(t.String),
  // photo: Image,
  // invoice: t.String,
});


class CreateInventoryItemScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: "New object",
      headerRight: (
        <Button
          color={Colors.tintColor}
          onPress={() => params.handleSubmit() }
          title="Save"/>
      ),
    };
  };

  state = {
    value: {
      name: "",
      category: null,
      purchaseDate: new Date(),
      price: null,
      description: "",
      photo: null,
      invoice: null,
    },
    isFormValid: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleSubmit: this.handleSubmit,
    })
  }

  handleSubmit = () => {
    const form = this.form.getValue();

    if (this.isFormValid()) {
      // Add item into DB.
    }
  };


  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <t.form.Form ref={c => this.form = c}
              type={InventoryItem}
              value={this.state.value}/>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

});

export default CreateInventoryItemScreen;