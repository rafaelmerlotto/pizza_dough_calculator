import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import logo from "../assets/images/logo.png"

export default function Version() {
    return (
        <View tyle={styles.container}>
            <Text style={styles.text}>Version 1.0.0  <Image source={logo} style={styles.img} /> </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
          display: "flex",
          flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        // color: "#29252c",
        width: 140,
        height: 60,
      
    },
    img: {
        height: 30,
        width: 30,
        // resizeMode:"stretch"

    }
})