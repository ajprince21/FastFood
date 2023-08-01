import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import * as Animatable from 'react-native-animatable';
import { colors, parameters, title } from '../../global/styles';
import { Icon, Button, SocialIcon } from '@rneui/themed';

import Header from '../../components/Header';

export default function SignInScreen() {
    const [textInputFocus, setTextInputFocus] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2)


    return (
        <View style={styles.container}>
            <Header title={'My Account'} type={"arrow-back"} />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Sign In</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={styles.text1}>Please enter the email and password </Text>
                <Text style={styles.text1}>Registerd with your account </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder='Email'
                        ref={textInput1}
                    />
                </View>
                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInputFocus ? '' : "fadeInLeft"} duration={400}>
                        <Icon name='lock' iconStyle={{ color: colors.grey3 }} type='material' style={{}} />
                    </Animatable.View>
                    <TextInput
                        placeholder='Password'
                        ref={textInput2}
                        onFocus={() => {
                            setTextInputFocus(false)
                        }}
                        onBlur={() => {
                            setTextInputFocus(true)
                        }}
                        style={{
                            width: '80%'
                        }}
                    />
                    <Animatable.View animation={textInputFocus ? '' : "fadeInLeft"} duration={400}>
                        <Icon name='visibility-off' iconStyle={{ color: colors.grey3 }} type='material' style={{ marginRight: 10 }} />
                    </Animatable.View>
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                    <Button
                        title={'SIGN IN'}
                        buttonStyle={parameters.buttonStyle}
                        titleStyle={parameters.buttonTitleStyle}
                    />
                </View>
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>Forgot Password ?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>OR</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10, }}>
                <SocialIcon
                    title='Sign In with Facebook'
                    button={true}
                    type='facebook'
                    iconType={'font-awesome'}
                    style={styles.socialIcon}
                    onPress={() => { }}
                    loading={false}
                />
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10, }}>
                <SocialIcon
                    title='Sign In with Google'
                    button={true}
                    type='google'
                    iconType={'font-awesome'}
                    style={styles.socialIcon}
                    onPress={() => { }}
                    loading={false}
                />
            </View>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
                <Text style={{ ...styles.text1 }}>New on Fast Food ?</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
                <Button
                    title={'Create an account'}
                    buttonStyle={styles.creatButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 15
    },
    socialIcon: {
        borderRadius: 12,
        height: 50,
        width: '100%',
        alignSelf: 'center',
    },
    creatButton: {
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3
    }

})