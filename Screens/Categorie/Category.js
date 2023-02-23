import { StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Badge, Box } from 'native-base'
import React from 'react'

const Category = (props) => {
    // const { dataCategory } = props
    return (
        <HStack>
            <TouchableOpacity key={1}
                onPress={() => {
                    props.categoryFilter('all'), props.setActive(-1)
                }} >
                <Box>
                    {
                        props.active == -1 ? <Badge style={styles.container} colorScheme="warning"
                            rounded="full" >All</Badge> : <Badge style={styles.container} colorScheme="info"
                                rounded="full" >All</Badge>
                    }
                </Box>

            </TouchableOpacity>
            {props.dataCategory.length > 0 ? (
                props.dataCategory.map((item) => (
                    <TouchableOpacity key={item._id}
                        onPress={() => {
                            props.categoryFilter(item._id),
                                props.setActive(props.dataCategory.indexOf(item))
                        }} >
                        <Box>
                            {
                                props.active == props.dataCategory.indexOf(item) ?
                                    <Badge style={styles.container} colorScheme="warning" rounded="full" >{item.icon}</Badge> :
                                    <Badge style={styles.container} colorScheme="info" rounded="full" >{item.icon}</Badge>
                            }
                        </Box>

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