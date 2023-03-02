import { StyleSheet, Text, View } from 'react-native'
import { React } from 'react'
import { Box, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../Redux/Actions/latihanRedux'

const LearnChild = () => {
    const latihanReduxData = useSelector((state) => state.latihanReduxs)
    const dispatch = useDispatch()
    return (
        <View>
            <Text>LearnChild</Text>
            <Text>Learn Redux</Text>
            <Box>nilai saat ini : {latihanReduxData.value}</Box>
            <Button onPress={() => dispatch(actions.increment())} >Tambah</Button>
            <Button onPress={() => dispatch(actions.decrement())} >Minus</Button>
        </View>
    )
}

export default LearnChild

const styles = StyleSheet.create({})