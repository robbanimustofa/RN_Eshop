import { Box } from "native-base";
import React, {useEffect, useState} from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import ProductList from "./ProductList";

const data = require('../../assets/product.json')

const productContainer = (props) =>{

    const [product, setProducts] = useState([])

    useEffect(()=>{
        setProducts(data);
        return()=>{
            setProducts([])
        }
    },[])

    return(
        <View style={styles.container}>
            <Box>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    data={product}
                    renderItem={({item})=><ProductList key={item.id} item={item} />}
                    keyExtractor={item => item._id}
                />
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexWrap:'wrap',
        backgroundColor: '#fff',
    },
  });

export default productContainer