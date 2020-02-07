import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import Colors from "../constants/Colors";
import CreateInventoryItemForm from "../views/CreateInventoryItemForm";
import {isStringNullOrEmpty} from "../tools/isStringNullOrEmpty";
import AddFileOrPhotoButton from "../components/AddFileOrPhotoButton";


const imagePickerOptions = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


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
      isFormValid: this.isFormValid,
      handlePhotoPicker: this.handlePhotoPicker,
      handleInvoicePicker: this.handleInvoicePicker,
    });
  }

  handleSubmit = () => {
    const form = this.childRef.form.getValue();
    console.log(form);
    if (this.isFormValid()) {
      // Add item into DB.
    }
  };

  async handleInvoicePicker() {
    try {
      this.state.value.invoice =  await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  handlePhotoPicker = () => {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({ value: { photo: response }})
      }
    });
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
    const photoUri = this.state.value.photo !== null ? this.state.value.photo.uri : "";
    const invoiceUri = this.state.value.invoice !== null ? this.state.value.invoice.uri : "";

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.photoContainer}>
          <AddFileOrPhotoButton imageUri={photoUri} onChange={this.handlePhotoPicker}/>
        </View>
        <CreateInventoryItemForm
          ref={c => this.childRef = c}
          value={this.state.value}/>
        <Text style={styles.smallTitle}>Documents</Text>
        <View style={styles.documentContainer}>
          <AddFileOrPhotoButton
            imageUri={invoiceUri}
            buttonPurpose={AddFileOrPhotoButton.ButtonPurpose.ADD_FILE}
            onChange={this.handleInvoicePicker}/>
        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  photoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  documentContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  smallTitle: {
    color: Colors.gray,
    fontWeight: 'bold',
  }
});

export default CreateInventoryItemScreen;