import React from 'react'
import { View, StyleSheet, Text, ScrollViewBase } from 'react-native';
import Main from '../components/Main';
import Info from './Info';


export default function Overview() {
  return (
    <View style={styles.container}> 
    
      <Main />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#a64942',
    display: "flex",
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});