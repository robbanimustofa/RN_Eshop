import React from 'react'
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native'
import { Box, Button } from 'native-base'
import { connect } from 'react-redux'
import * as actions from '../../Redux/Actions/cartAction'

var { width } = Dimensions.get("window")

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" />
            <View style={styles.card} />
            <Text style={styles.title} >
                {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
            </Text>
            <Text style={styles.price} >${price}</Text>
            {
                countInStock > 0 ? (
                    <Box style={{ marginVertical: 10 }}>
                        <Button size='sm' onPress={() => {
                            props.addItemToCart(props)
                        }}>Add</Button>
                    </Box>
                ) : <Text style={{ marginTop: 20 }} > Current Unavailable </Text>
            }
        </View>
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
