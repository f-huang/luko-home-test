import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import Colors from "../constants/Colors";
import CreateInventoryItemForm from "../views/CreateInventoryItemForm";
import {isStringNullOrEmpty} from "../tools/isStringNullOrEmpty";



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

  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleSubmit: this.handleSubmit,
    });
  }

  handleSubmit = () => {
    const form = this.childRef.form.getValue();
    console.log(form);
    if (this.isFormValid()) {
      // Add item into DB.
    }
  };

  isFormValid = () => {
    return (
      !isStringNullOrEmpty(this.state.value.name)
      && !isStringNullOrEmpty(this.state.value.category)
      && this.state.value.price !== null
      && this.state.value.purchaseDate !== null
      && this.state.value.photo !== null
    )
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <CreateInventoryItemForm
          ref={c => this.childRef = c}
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