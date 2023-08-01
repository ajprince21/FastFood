import React from "react";

import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { colors } from "./src/global/styles";
import SignInScreen from "./src/screens/authScreens/signInScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen";

export default function App() {
  return (
    <View style={styles.conatiner}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <SignInWelcomeScreen/>
    </View>
  )
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff'
  }
})