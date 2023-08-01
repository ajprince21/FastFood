import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import * as Animatable from 'react-native-animatable';
import { colors, parameters, title } from '../../global/styles';
import { Icon, Button, SocialIcon } from '@rneui/themed';
import Swiper from 'react-native-swiper'

const SignInWelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>In YOUR AREA</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper style={styles.wrapper} autoplay={true} >
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../images/onboarding-1.jpg')}
                            style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={require('../../images/onboarding-2.jpg')}
                            style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={require('../../images/onboarding-3.jpg')}
                            style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                    <Button
                        title={'SIGN IN'}
                        buttonStyle={parameters.buttonStyle}
                        titleStyle={parameters.buttonTitleStyle}
                        onPress={() => {
                            navigation.navigate('SignInScreen')
                        }}
                    />
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                    <Button
                        title={'Create an account'}
                        buttonStyle={styles.creatButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    )
}

export default SignInWelcomeScreen

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatButton: {
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.grey4
    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3
    }
})