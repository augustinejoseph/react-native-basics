import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
export default function App() {
  console.log(useDeviceOrientation());
  const landscape = useDeviceOrientation()
  console.log("landscape", landscape);


  return (
    <>
      <View style={{
        backgroundColor: "red",
        height: landscape ? "100%" : "30%",
        width: "100%"
      }}>
        Title
      </View>
      <Text >Okk</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgeblue",
    height: "30%",
    width: "100%"
  },
  dummyText: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 20
  }
})