import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import LearnChild from './LearnChild'

const LearnParent = () => {
    const [dataFromChild, setDataFromChild] = useState('');

    console.log(dataFromChild)
    return (
        <View>
            <Text>LearnParent</Text>
            <Text>Data Parent : {dataFromChild}</Text>
            <LearnChild setDataChild={setDataFromChild} />
        </View>
    )
}

export default LearnParent

const styles = StyleSheet.create({})