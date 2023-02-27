import { Text, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'native-base'


const Chart = (props) => {
    return (
        <Box>
            {props.cartItems.map((x, index) => {
                return (
                    <Text key={index}>{x.product.name}</Text>
                )
            })}
        </Box>
    )
}

const mapStateToProps = (state) => {
    const { cartItems } = state
    return {
        cartItems: cartItems
    }
}


export default connect(mapStateToProps, null)(Chart)