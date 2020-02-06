import React from 'react';
import { View, Text} from 'react-native';

class DefaultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Default</Text>
      </View>
    )
  }
}

const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
};


export default DefaultScreen;