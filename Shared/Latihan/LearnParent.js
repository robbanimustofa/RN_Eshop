import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../Redux/Actions/latihanRedux'

import LearnChild from './LearnChild'

const LearnParent = () => {
    const isShow = useSelector((state) => state.latihanReduxs.isLogged)
    const dispatch = useDispatch()
    return (
        <View>
            <Button onPress={() => dispatch(actions.clearData())} >Show</Button>
            {
                isShow ? <LearnChild /> : null
            }
        </View>
    )
}



export default LearnParent

const styles = StyleSheet.create({})