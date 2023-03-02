import React from 'react'
import { StyleSheet, Dimensions, Text } from 'react-native'
import { Box, FlatList } from 'native-base';

import ListSearch from '../../Shared/ListSearch';

var { width } = Dimensions.get("window")

const SearchProduct = (props) => {

    const { productsFiltered } = props;
    return (
        <Box>
            {productsFiltered.length > 0 ? (
                <Box>
                    <Text style={styles.textSearch} >Hasil Pencarian</Text>
                    <FlatList
                        data={productsFiltered}
                        renderItem={({ item }) => <ListSearch key={item.id} list={item} />}
                        keyExtractor={item => item._id}
                    />
                </Box>
            ) : (
                <Box>Pencarian Tidak Ditemukan</Box>
            )}
        </Box>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    textSearch: {
        width: '100%',
        marginBottom: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
})

export default SearchProduct