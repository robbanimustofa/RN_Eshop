import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SearchBar from "../../Shared/SearchBar";
import Category from '../Categorie/Category'
import ProductList from "../Product/ProductList";


const data = require('../../assets/product.json')
import dataTryCat from '../../assets/category.json'
import { Box } from "native-base";

const productContainer = () => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    // const [focus, setFocus] = useState();

    useEffect(() => {
        setProductsFiltered(data);
        // setFocus(false);
        return () => {
            // setFocus();
            setProductsFiltered([]);
        }
    }, [])

    return (
        <View style={styles.container}>
            <SearchBar title='Search Product' dataProduct={productsFiltered} />
            <FlatList
                horizontal={false}
                numColumns={2}
                data={productsFiltered}
                renderItem={({ item }) =>
                    <ProductList key={item.id} item={item} />}
                keyExtractor={item => item._id} />
            {/* {focus == false ? (
                <SearchBar title='Search Product' dataProduct={productsFiltered} />
            ) : (
                <Box>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={productsFiltered}
                        renderItem={({ item }) =>
                            <ProductList key={item.id} item={item} />}
                        keyExtractor={item => item._id} />
                    <Category dataCategory={dataTryCat} />
                </Box>

            )
            } */}
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