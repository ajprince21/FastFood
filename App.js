import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet, StatusBar } from 'react-native'


import { colors } from "./src/global/styles";
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <View style={styles.conatiner}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
  )
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff'
  }
})