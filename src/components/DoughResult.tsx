import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DoughResult({ dough }) {

    const { total, flour, water, salt, yeast } = dough;

    return (
        <View  style={styles.container}>

            <View style={styles.containerText}><Text style={styles.text}>Flour: {Number(flour).toFixed()}g</Text></View>
            <View style={styles.containerText}><Text style={styles.text}>Water: {Number(water).toFixed()}g</Text></View>
            <View style={styles.containerText}><Text style={styles.text}>Salt: {Number(salt).toFixed()}g</Text></View>
            <View style={styles.containerText}><Text style={styles.text}>Yeast: {Number(yeast).toFixed(1)}g</Text></View>
            <View style={styles.containerTextLastChild}><Text style={styles.text}>Total dough: {Number(total).toFixed()}g</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 30,
        gap: 15,
        zIndex: 1
    },
    containerText: {
        width: 135,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(41, 37, 44, 0.8)",
        borderColor: "rgba(41, 37, 44, 0.8)",
        borderRadius: 5
    },
    containerTextLastChild: {
        width: 180,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(41, 37, 44, 0.8)",
        borderColor: "rgba(41, 37, 44, 0.8)",
        borderRadius: 5
    },
    text: {
        color: "#a64942",
    }
});
