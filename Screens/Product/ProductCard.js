import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet, Image, Text, Button } from 'react-native'


var {width} = Dimensions.get("window")

const ProductCard = (props) => {
    const {name,price,image,countInStock} = props;
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} resizeMode="contain"/>
        <SafeAreaView style={styles.card} />
        <Text style={styles.title} >
            {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
        </Text>
        <Text style={styles.price} >${price}</Text>
        {
            countInStock > 0 ? (
                <SafeAreaView style={{ marginBottom: 60 }}>
                    <Button title={'Add'} color={'blue'} />
                </SafeAreaView>
            ) : <Text style={{ marginTop: 20 }} > Current Unavailable </Text>
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
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

export default ProductCard
