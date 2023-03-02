import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Text, Flex } from 'native-base'

const CardSearch = (props) => {
    const { name, description, stock } = props
  return (
    <Box style={styles.card} >
    <Flex direction="row" pl="2.5" mb="3" mt="3">
        <Box style={styles.avatar} >
            <Text>Avatar</Text>
        </Box>
        <Box style={styles.title} >
            <Text>{name}</Text>
            <Text>{description}</Text>
        </Box>
        <Box>Panah</Box>
    </Flex>
</Box>
  )
}

export default CardSearch

const styles = StyleSheet.create({})