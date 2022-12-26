import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
        <View>
            <Image/>
            <Text style={{fontSize:25}}>EShop</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        width:  '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 10
    }
})

export default Header
