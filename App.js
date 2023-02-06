import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base'

import ProductContainer from './Screens/Product/productContainer.js';
import Header from './Shared/Header.js';
import Category from './Screens/Categorie/Category'

import dataTryCat from './assets/category.json'

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Box style={styles.container}>
        <ProductContainer />
        <Category dataCategory={dataTryCat} />
      </Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
});
