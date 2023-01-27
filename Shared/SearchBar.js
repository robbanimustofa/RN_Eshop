import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Heading, Input, Icon, Box, View, CloseIcon } from 'native-base'
import { Ionicons } from "@expo/vector-icons";

import ProductList from "../Screens/Product/ProductList";
import SearchProduct from '../Screens/Product/SearchProduct.js'
const dataSample = require('../assets/product.json')

const SearchBar = (props) => {
  const {title, data} = props

  const [product, setProducts] = useState([])
  const [focus, setFocus] = useState();
  const [productsFiltered, setProductsFiltered] = useState([]);
  
  
  useEffect(() => {
    setFocus(false);
    setProductsFiltered(dataSample);
    setProducts(dataSample);
    return () => {
        setFocus();
        setProducts([]);
        setProductsFiltered([]);
    }
}, [])


const searchProductFunc = (text) => {
  setProductsFiltered(
      product.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
  );
};

const openList = () => {
  setFocus(true);
};

const onBlur = () => {
  setFocus(false);
};

  return (
    <Box>
      <Box style={styles.search}>
      <Heading fontSize="sm">{title}</Heading>
      <Input placeholder="Input disini"  borderRadius="10"
                    py="1" px="2" InputLeftElement={<Icon ml="2" size="4"
                        color="gray.400" as={<Ionicons name="ios-search" />} />}
                        InputRightElement={
                            focus == true ? <CloseIcon onPress={onBlur} size="4" mr="2" color="danger.600" /> : null
                        }
                    onFocus={openList} onChangeText={(text) =>
                        searchProductFunc(text)} />
      </Box>
      
      {focus == true ? (
        <SearchProduct productsFiltered={productsFiltered} />
      ) :(
        <Box>
          {/* <Box>{JSON.stringify(product)}</Box> */}
        <FlatList
            horizontal={false}
            numColumns={2}
            data={product}
            renderItem={({ item }) =>
                <ProductList key={item.id} item={item} />}
            keyExtractor={item => item._id} />
    </Box>
      ) }
    </Box>
    
  )
}

const styles = StyleSheet.create({
    search: {
      width: '100%',
      marginBottom: 10,
      // paddingHorizontal: 10
    }
  })

export default SearchBar
