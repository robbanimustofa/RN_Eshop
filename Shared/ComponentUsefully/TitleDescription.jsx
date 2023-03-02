import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Box, Button } from 'native-base'


var { width } = Dimensions.get("window")

const TitleDescription = (props) => {
    const { name, price, countInStock } = props
  return (
    <Box>
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
    </Box>
  )
}

export default TitleDescription

const styles = StyleSheet.create({
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
        marginTop: 10,
        textAlign: 'center'
    }
})