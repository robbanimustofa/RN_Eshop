import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
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
            <Text>Product Container</Text>
            <View>
                <FlatList
                    horizontal
                    data={product}
                    renderItem={({item})=><ProductList key={item.id} item={item} />}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      marginTop:30
    },
  });

export default productContainer