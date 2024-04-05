import { StyleSheet, Text, View, Image, Linking } from 'react-native'
import React from 'react'
import logo from "../assets/images/logo.png"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Info() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.title}>Pizza Dough Calculator </Text>
      <Text style={styles.description}>With this pizza dough calculator app, you can create your own dough using a
        simple form. Fill in the fields with your desired values, and get the result to start kneading.</Text>
      <Text style={styles.text}><Ionicons name="person" size={16} color="#29252c" /> Author: <Text style={{ fontWeight: "bold" }}>Rafael Merlotto</Text></Text>
      <Text style={styles.text}><AntDesign name="github" size={16} color="#29252c" /> Github: <Text onPress={() => Linking.openURL("https://github.com/rafaelmerlotto")} style={{ fontWeight: "bold" }}>@rafaelmerlotto</Text></Text>
      <Text style={styles.text}><MaterialCommunityIcons name="update" size={18} color="#29252c" /> Version: <Text style={{ fontWeight: "bold" }}>1.0.2</Text></Text>

    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#a64942',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100
  },
  img: {
    height: 70,
    width: 70,
    marginBottom: 10
  },
  title: {
    fontSize: 19,
    color: "#29252c",
    height: 30,
  },
  text: {
    padding: 10,
    fontSize: 14,
    color: "#29252c",

  },
  description: {
    padding: 25,
    fontSize: 16,
    color: "#29252c",
   
  }
})