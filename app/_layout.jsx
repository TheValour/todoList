import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Header</Text>
    </>
  )
  // return (
  //   <View style={styles.container}>
  //     <Text>RootLayout</Text>
  //   </View>
  // )
}

export default RootLayout

const styles = StyleSheet.create({
  container :{
    display:'flex',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})