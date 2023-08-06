import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Button, Icon, Avatar } from '@rneui/themed';
import { colors } from '../global/styles';

export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Avatar
                        size={75}
                        rounded
                        avatarStyle={styles.avatarStyle}
                        source={{uri:'https://randomuser.me/api/portraits/men/36.jpg'}}
                        
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    avatarStyle: {
        borderWidth: 4,
        borderColor: colors.CardBackground,
    }
})