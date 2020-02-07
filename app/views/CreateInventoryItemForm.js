import React from 'react';
import { Button } from 'react-native';
import t from 'tcomb-form-native';
import _ from "lodash";
import moment from 'moment';
import Colors from "../constants/Colors";

/********************FORM STYLESHEET*****************************/
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.formGroup.width = '80%';
stylesheet.formGroup.flex = 1;

stylesheet.controlLabel.normal.color = Colors.gray;

stylesheet.pickerContainer.normal.borderRadius = 0;
stylesheet.pickerContainer.error.borderRadius = 0;
stylesheet.pickerContainer.normal.borderWidth = 0;
stylesheet.pickerContainer.error.borderWidth = 0;

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderBottomColor = Colors.gray;
stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 0.4;
stylesheet.textboxView.error.borderBottomWidth = 0.4;
stylesheet.textboxView.normal.marginBottom = 5;
stylesheet.textboxView.error.marginBottom = 5;

/************************************************************/
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

const formOptions = {
  stylesheet: stylesheet,
  // const: 'placeholders',
  // auto: 'none',
  fields: {
    purchaseDate: {
      config: {
        format: (date) => moment(date).format('DD/MM/YYYY'),
      },
      maximumDate: new Date(),
      mode: 'date',
      blurOnSubmit: true,
    },
    price: {
      label: 'Purchased price (€)'
    }
  }
};

class CreateInventoryItemForm extends React.Component {

  render() {
    return (
      <t.form.Form
        ref={c => this.form = c}
        type={InventoryItem}
        options={formOptions}
        value={this.props.value}/>
    )
  }
}

export default CreateInventoryItemForm;