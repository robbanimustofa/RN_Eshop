import React from 'react'
import { Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'

import ProductCard from './ProductCard'

var {width} = Dimensions.get("window")

const ProductList = (props) => {
    const {item} = props
  return (
    <TouchableOpacity style={{width:'50%'}}>
        <SafeAreaView style={{width:width/2, backgroundColor:'gainsboro'}}>
            <ProductCard {...item} />
        </SafeAreaView>
    </TouchableOpacity>
  )
}

export default ProductList
