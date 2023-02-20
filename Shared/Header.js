import React from 'react'
import { StyleSheet } from 'react-native'
import { Box, Divider, Heading } from 'native-base'

const Header = () => {
  return (
    <Box alignItems='center' >
      <Heading style={styles.header} mx="3" alignItems="center" flexDirection="row">
        Eshop
      </Heading>
      <Divider my="2" thickness="5" _light={{
        bg: "info.200"
      }} _dark={{
        bg: "info.200"
      }} />
    </Box>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    marginTop: 25
  }
})

export default Header
