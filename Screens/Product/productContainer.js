import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Heading, Input, Icon, Box } from 'native-base';
import { Ionicons } from "@expo/vector-icons";

import ProductList from "./ProductList";
// import SearchBar from "../../Shared/SearchBar";
import SearchProduct from '../Product/SearchProduct.js'

const data = require('../../assets/product.json')

const productContainer = (props) => {

    const [product, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return () => {
            setProducts([]),
                setProductsFiltered([]);
            setFocus();
        }
    }, [])

    // Product Methods
    const searchProductFunc = (text) => {
        setProductsFiltered(
            product.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    const openList = () => {
        setFocus(true);
    };

    // const onBlur = () => {
    //     setFocus(false);
    // };

    return (
        <View style={styles.container}>
            <Box style={styles.search} >
                <Heading fontSize="sm">Search</Heading>
                {/* <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} /> */}
                <Input placeholder="Input disini" borderRadius="10"
                    py="1" px="2" InputLeftElement={<Icon ml="2" size="4"
                        color="gray.400" as={<Ionicons name="ios-search" />} />}
                    onFocus={openList} onChangeText={(text) =>
                        searchProductFunc(text)} />
            </Box>
            {/* <SearchBar title='Search' /> */}
            {focus == true ? (
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
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexWrap:'wrap',
        backgroundColor: '#fff',
    },
    search: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10
    }
});

export default productContainer