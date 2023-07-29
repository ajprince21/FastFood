import React from "react";

import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Header from "./src/components/Header";
import { colors } from "./src/global/styles";

export default function App(){
  return(
    <View style={styles.conatiner}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
        
      />
      <Header title={'My Account'}/>
      <Text>Hello Ajay how are you doing ?</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:'#fff'
  }
})