import { View,  ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"#29252c"} size={"large"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height:190,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
          zIndex:1,
          backgroundColor:"#a64942"
    },
})