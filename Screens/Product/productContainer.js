import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Heading, Input, Icon, Box, CloseIcon } from 'native-base';
import { Ionicons } from "@expo/vector-icons";

// import ProductList from "./ProductList";
import SearchBar from "../../Shared/SearchBar";
// import SearchProduct from '../Product/SearchProduct.js'

const data = require('../../assets/product.json')

const productContainer = () => {

    // const [product, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        // setProducts(data);
        setProductsFiltered(data);
        return () => {
            // setProducts([]),
            setProductsFiltered([]);
        }
    }, [])

    return (
        <View style={styles.container}>
            <SearchBar title='Search Product' dataProduct={productsFiltered} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexWrap:'wrap',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    search: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    }
});

export default productContainer


{/* <Box style={styles.search} >
                <Heading fontSize="sm">Search</Heading>
                <Input placeholder="Input disini"  borderRadius="10"
                    py="1" px="2" InputLeftElement={<Icon ml="2" size="4"
                        color="gray.400" as={<Ionicons name="ios-search" />} />}
                        InputRightElement={
                            focus == true ? <CloseIcon onPress={onBlur} size="4" mr="2" color="danger.600" /> : null
                        }
                    onFocus={openList} onChangeText={(text) =>
                        searchProductFunc(text)} />
            </Box> */}
{/* {focus == true ? (
                <SearchProduct productsFiltered={productsFiltered} />
            ) : (
                <Box>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={product}
                        renderItem={({ item }) =>
                            <ProductList key={item.id} item={item} />}
                        keyExtractor={item => item._id} />
                </Box>
            )} */}
{/* <Box>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={product}
                        renderItem={({ item }) =>
                            <ProductList key={item.id} item={item} />}
                        keyExtractor={item => item._id} />
                </Box> */}