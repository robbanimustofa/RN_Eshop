import React from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Box, Button } from 'native-base'
import { connect } from 'react-redux'
import * as actions from '../../Redux/Actions/cartAction'

import TitleDescription from '../../Shared/ComponentUsefully/TitleDescription'


var { width } = Dimensions.get("window")

const ProductCard = (props) => {
    const { item } = props
    return (
        <TouchableOpacity style={{ width: '50%' }} >
            <Box style={styles.backgroundCard} >
                <View style={styles.container}>
                    <TitleDescription {...item} />
                </View>
            </Box>

        </TouchableOpacity>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch(actions.addToCart({ quantity: 1, product }))
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 35,
        height: width / 2,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    backgroundCard: {
        width: width / 2.2,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginBottom: 5
    },
    card: {
        marginBottom: 10,
        height: width / 4 - 10 - 40,
        backgroundColor: 'transparent',
        // width: width / 3 - 50 - 100
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },

    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'green',
        marginTop: 10
    }
})

export default connect(null, mapDispatchToProps)(ProductCard)
