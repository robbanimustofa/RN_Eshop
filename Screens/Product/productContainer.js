import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SearchBar from "../../Shared/SearchBar";
import Category from '../Categorie/Category'
// import ProductList from "./ProductList";
import ProductCard from "./ProductCard";

const data = require('../../assets/product.json')
import dataTryCat from '../../assets/category.json'

const ProductContainer = () => {
    const [productsFiltered, setProductsFiltered] = useState();
    const [active, setActive] = useState(-1);

    useEffect(() => {
        getData()
        return () => {
            setProductsFiltered([]),
                setActive()

        }
    }, [])

    const getData = () => {
        setProductsFiltered(data);
    }

    // Cat
    const changeCtg = (ctg) => {
        ctg === 'all'
            ? [setProductsFiltered(data), setActive(true)] : [setProductsFiltered(
                data.filter((i) => i.category._id === ctg), setActive(true)
            )]
    }


    return (
        <View style={styles.container}>
            <SearchBar title='Search Product' dataProduct={data} />
            <Category
                dataCategory={dataTryCat}
                categoryFilter={changeCtg}
                productsCategory={productsFiltered}
                active={active}
                setActive={setActive}
            />
            <FlatList
                horizontal={false}
                numColumns={2}
                data={productsFiltered}
                renderItem={({ item }) =>
                    <ProductCard key={item.id} item={item} />}
                keyExtractor={item => item._id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginBottom: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 1,
    },
    search: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    }
});

export default ProductContainer