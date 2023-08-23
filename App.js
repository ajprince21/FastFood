import React from "react";
import { View, StyleSheet, StatusBar } from 'react-native'


import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/rootNavigation";
import { SignInContextProvider } from "./src/contexts/authContext";



export default function App() {
  return (
    <SignInContextProvider>
    <View style={styles.conatiner}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
    </SignInContextProvider>
  )
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff'
  }
})