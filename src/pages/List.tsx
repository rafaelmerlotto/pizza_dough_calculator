import { StyleSheet, Text, View, Image, ScrollViewBase, SafeAreaView, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'
import logo from "../assets/images/logo.png"
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';




export interface Data {
  id: string
  createdAt: Date
  name: string
  flour: number
  water: number
  salt: number
  yeast: number
  total: number
}

export default function List() {

  const [list, setList] = useState<Data[] | null>([])


  useEffect(() => {
    const colRef = collection(db, 'dough')
    onSnapshot(colRef, (QuerySnapshot) => {
      const dough: Data[] = []
      QuerySnapshot.forEach((doc) => {
        const { name, createdAt, flour, water, salt, yeast, total } = doc.data()
        dough.push({
          id: doc.id,
          createdAt,
          name,
          flour,
          water,
          salt,
          yeast,
          total
        })
      })
    return setList(dough)
    })
  }, [])


  const deleteDocument = async (path: string) => {
    const ref = doc(db, 'dough', path);
   return  await deleteDoc(ref)
  }



  return (

    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.title}>Saved doughs</Text>
      <ScrollView style={styles.scrollView}>
        {list.map((e: any) => (
          <View key={e.id} style={styles.card}>
            <View style={styles.topRow}>
              <Text style={{ color: "#a64942", padding: 5, fontSize: 11  }}> <AntDesign name="calendar" size={15} color="#a64942" /> {e.createdAt}</Text>
              <AntDesign onPress={() => deleteDocument(e.id)} name="delete" size={23} style={{padding:5}} color="#a64942" />
            </View>
            <Text style={styles.titleCard}> {e.name}</Text>
            <Text style={styles.text}>Total dough: {e.total}g</Text>
            <View style={styles.box}>
              <Text style={styles.text}>Flour: {e.flour}g</Text>
              <Text style={styles.text}>Salt: {e.salt}g</Text>
              <Text style={styles.text}>Water: {e.water}g</Text>
              <Text style={styles.text}>Yeast: {e.yeast}g</Text>

            </View>


          </View>

        ))}
      </ScrollView>



    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    backgroundColor: '#a64942',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    flex: 1,

  },
  scrollView: {
    height: 100,
    marginHorizontal: 10,

  },
  card: {
    width: 350,
    height: 190,
    backgroundColor: "rgba(41, 37, 44, 0.8)",
    margin: 10,
    borderRadius: 5,
    display: "flex",

  },
  box: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    padding: 10,
    fontSize: 13,
    color: '#a64942',
    width: "50%",
    height: 40
  },
  titleCard: {
    padding: 5,
    fontSize: 18,
    color: '#a64942',
    width: "100%",
    height: 35
  },
  title: {
    fontSize: 19,
    color: "#29252c",
    height: 30,
  },
  img: {
    height: 70,
    width: 70,
    marginBottom: 10
  },
  topRow:{
    width: "100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  }
})