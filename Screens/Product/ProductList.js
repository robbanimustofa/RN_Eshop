import React from 'react'
import { Dimensions, View, TouchableOpacity, StyleSheet } from 'react-native'

import ProductCard from './ProductCard'

var {width} = Dimensions.get("window")

const ProductList = (props) => {
  const {item} = props
  return (
    <TouchableOpacity style={{width:'50%'}} >
        <View style={styles.backgroundCard}>
            <ProductCard {...item} />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backgroundCard: {
    width:width/2.1,
    backgroundColor:'#f5f5f5',
    borderRadius: 20,
    margin:5
  }
})

export default ProductList
