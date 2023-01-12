import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native-web';
import { Heading, Input, Icon, Box, View } from 'native-base'
import { Ionicons } from "@expo/vector-icons";


// import SearchProduct from '../Screens/Product/SearchProduct.js'

const SearchBar = (props) => {
  const {title, data} = props

  const [focus, setFocus] = useState();

  useEffect(() => {
    setFocus(false);
    return () => {
        setFocus();
    }
}, [])

const openList = () => {
  setFocus(true);
  console.log(setFocus)
};

  return (
    <Box style={styles.search} >
      <Heading fontSize="sm">{title}</Heading>
      <Input onFocus={openList} placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      {/* {focus == true ? (
        <SearchProduct />
        <Box>Kosong</Box>
      ) :(
        <Box>Kosong</Box>
      ) } */}
      {/* <Box>{data}</Box> */}
    </Box>
    
  )
}

const styles = StyleSheet.create({
    search: {
      width: '100%',
      marginBottom: 20,
      paddingHorizontal: 10
    }
  })

export default SearchBar
