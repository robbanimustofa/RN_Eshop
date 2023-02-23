import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Heading, Input, Icon, Box, View, CloseIcon } from 'native-base'
import { Ionicons } from "@expo/vector-icons";


import { searchFunc } from '../utils/index'
import SearchProduct from '../Screens/Product/SearchProduct.js'


const SearchBar = (props) => {
  const { title, dataProduct } = props

  // const [product, setProducts] = useState([])
  const [focus, setFocus] = useState();
  const [productsFiltered, setProductsFiltered] = useState([]);
  // const [inputSearch, setinputSearch] = useState();

  useEffect(() => {
    setFocus(false);
    setProductsFiltered(dataProduct);
    return () => {
      setFocus();
      setProductsFiltered([]);
    }
  }, [])


  const searchProductFunc = (text) => {
    const value = searchFunc(dataProduct, 'name', text)
    setProductsFiltered(value)
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
        <Input placeholder="Input disini" borderRadius="10"
          py="1" px="2" InputLeftElement={<Icon ml="2" size="4"
            color="gray.400" as={<Ionicons name="ios-search" />} />}
          InputRightElement={
            focus == true ? <CloseIcon onPress={onBlur}
              size="4" mr="2" color="danger.600" /> : null
          }
          onFocus={openList} onChangeText={(text) =>
            searchProductFunc(text)} />
      </Box>
      {focus == true ? (
        <SearchProduct productsFiltered={productsFiltered} />
      ) : (null
      )}
    </Box>

  )
}

const styles = StyleSheet.create({
  search: {
    width: '100%',
    marginBottom: 10,
  }
})

export default SearchBar
