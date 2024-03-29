import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native'
import React from 'react'
import logo from "../assets/images/logo.png"
import { Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function CustomDrawer({ props }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container} {...props}>
            <Image source={logo} style={styles.img} />
            <Text style={styles.title}>Pizza Dough Calculator </Text>
            <Pressable style={styles.btn} onPress={() => navigation.navigate("Overview")}>
                <Text style={styles.btnText}> <Entypo name="calculator" size={17} color="#a64942" /> Calculator</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => navigation.navigate("info")}>
                <Text style={styles.btnText}> <Entypo name="info-with-circle" size={17} color="#a64942" /> Info</Text>
            </Pressable>
            <Text style={styles.text}>Version 1.0.1  <Image source={logo} style={styles.imgVersion} /> </Text>
        </View>








    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#a64942",
        paddingTop: 70
    },
    text: {
        color: "#29252c",
        width: 140,
        height: 60,
        marginLeft: 90,
        position: "absolute",
        bottom: 0,

    },
    imgVersion: {
        height: 30,
        width: 30,
        // resizeMode:"stretch"

    },

    btn: {
        width: "90%",
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(41, 37, 44, 0.8)",
        marginTop: 20,
        borderRadius: 5
    },
    btnText: {
        color: "#a64942",
        fontSize: 12,


    },
    title: {
        fontSize: 17,
        color: "#29252c",
        height: 70,
    },
    img: {
        height: 70,
        width: 70,

    },
})