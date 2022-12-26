import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base'

import ProductContainer from './Screens/Product/productContainer.js';
import Header from './Shared/Header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer/>
      <StatusBar style="auto" />
      <Button
      _light={{ bg: 'teal', _text: { color: 'white' } }}
      _dark={{ bg: 'amber' }}
    >
      Sample
    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
