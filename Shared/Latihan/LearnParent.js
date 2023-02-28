import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button } from 'native-base';
import { connect } from 'react-redux'
// import * as actions from '../Redux/Actions/inDecrementAction'

// import LearnChild from './LearnChild'

const LearnParent = (props) => {
    return (
        <View>
            <Text>Learn Redux</Text>
            {/* <Box>{props.inDecrements}</Box> */}
            <Button  >Tambah</Button>
            <Button>Minus</Button>
        </View>
    )
}

const mapStateToProps = (state) => {
    const { inDecrements } = state
    console.log(inDecrements)
    return {
        inCreDecrement: inDecrements
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItemToCart: (product) => dispatch(actions.addToCart({ quantity: 1, product }))
//     }
// }


export default connect(mapStateToProps, null)(LearnParent)

const styles = StyleSheet.create({})