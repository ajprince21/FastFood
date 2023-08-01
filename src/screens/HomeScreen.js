import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <HomeHeader type={'menu'} navigation={navigation}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})