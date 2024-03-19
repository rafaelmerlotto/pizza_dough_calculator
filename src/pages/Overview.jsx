import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Version from '../components/Version';
import Main from '../components/Main';

export default function Overview() {
  return (
    <View style={styles.container}>
      <Main />
      <Version />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#backgroundColor: "#a64942"',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
});