import React from 'react'
import { StyleSheet, Dimensions, Text } from 'react-native'
import { Box, ScrollView, FlatList } from 'native-base';

import ProductList from './ProductList';

var { width } = Dimensions.get("window")

const SearchProduct = (props) => {

    const { productsFiltered } = props;
    return (
        <Box>
            <Text style={styles.textSearch} >Hasil Pencarian</Text>
            {productsFiltered.length > 0 ? (
                <Box>
                    <FlatList
                    horizontal={false}
                    numColumns={2}
                    data={productsFiltered}
                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
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
        textAlign:'center'
    }
})

export default SearchProduct

//     <Content>
//     {productsFiltered.length > 0 ? (
//         productsFiltered.map((item) => (
//             <ListItem
//                 onPress={() => {
//                     props.navigation.navigate("Product Detail", {item: item})
//                 }}
//                 key={item._id}
//                 avatar
//             >
//                 <Left>
//                     <Thumbnail 
//                         source={{uri: item.image ? 
//                             item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
//                                 }}
//                     />
//                 </Left>
//                 <Body>
//                     <Text>{item.name}</Text>
//                     <Text note>{item.description}</Text>
//                 </Body>
//             </ListItem>
//         ))
//     ) : (
//         <View style={styles.center}>
//             <Text style={{ alignSelf:  'center' }}>
//                 No products match the selected criteria
//             </Text>
//         </View>
//     )}
// </Content>
// import { View, StyleSheet, Dimensions, FlatList } from 'react-native'
// import { Content, Left, Body, ListItem, Thumbnail, Text, Box, ScrollView } from 'native-base';



// productsFiltered.map((searchList) => (
                //     <Box key={searchList._id} >{JSON.stringify(searchList)}</Box>
                //     <FlatList
                //     horizontal={false}
                //     numColumns={2}
                //     data={searchList}
                //     renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                //     keyExtractor={item => item._id}
                // />
                // )
                // )