import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box} from 'native-base'

import ProductContainer from './Screens/Product/productContainer.js';
import Header from './Shared/Header.js';
// import SearchBar from './Shared/SearchBar.js';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      {/* <SearchBar  /> */}
      <Box style={styles.container}>
        <ProductContainer/>
      </Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal : 10
  },
});
