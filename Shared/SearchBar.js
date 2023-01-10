import React from 'react'
import { StyleSheet } from 'react-native-web';
import { Heading, Input, Icon, Box, VStack, Divider } from 'native-base'
import { Ionicons } from "@expo/vector-icons";


const SearchBar = () => {
  return (
    <Box style={styles.search} >
        <Heading fontSize="sm">Search</Heading>
        <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
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
