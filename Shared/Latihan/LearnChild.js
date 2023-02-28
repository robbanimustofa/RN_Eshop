import { Button, StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'

const LearnChild = ({ setDataChild }) => {
    const [data, setData] = useState('Bani');

    const changeData = () => {
        setData('Rizal');
        console.log('Child Data : ', data)
    };
    setDataChild(data)
    return (
        <View>
            <Text>LearnChild</Text>
            <Text>Data Child : {data}</Text>
            <Button onPress={changeData} title='Click Me' />
        </View>
    )
}

export default LearnChild

const styles = StyleSheet.create({})