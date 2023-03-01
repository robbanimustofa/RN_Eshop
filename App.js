import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store.js';



// Navigator
import Main from './Navigators/Main.js';

// import ProductContainer from './Screens/Product/ProductContainer.js';
import Header from './Shared/Header.js';
import LearnParent from './Shared/Latihan/LearnParent';

export default function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider>
        {/* <NavigationContainer>
          <Header />
          <Main />
          <StatusBar style="auto" />
        </NavigationContainer> */}
        <LearnParent />
      </NativeBaseProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});


