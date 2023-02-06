import { StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Badge, Box } from 'native-base'
import React from 'react'

const Category = (props) => {
    const { dataCategory } = props
    return (
        <HStack>
            {dataCategory.length > 0 ? (
                dataCategory.map((item) => (
                    <TouchableOpacity key={item._id} >
                        <Badge style={styles.container} rounded="full" >{item.icon}</Badge>
                    </TouchableOpacity>

                ))
            ) : <Box></Box>}
        </HStack>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginBottom: 10
    }
})