import React from 'react'
import { Text } from 'native-base'
import { View, TouchableOpacity } from 'react-native'

import CardSearch from './ComponentUsefully/CardSearch'


const ListSearch = (props) => {
  const { list } = props
  return (
    <TouchableOpacity >
      <View style={{ marginBottom: 10 }} >
        <CardSearch {...list} />
      </View>
    </TouchableOpacity>
  )
}



export default ListSearch
