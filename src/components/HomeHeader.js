import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from "../global/styles";

import { Icon, withBadge } from '@rneui/themed';

export default function HomeHeader({ title, navigation }) {
    const BadgedIcon = withBadge(1)(Icon);
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', }}>
                <Icon
                    type="MaterialIcons"
                    name={'menu'}
                    color={colors.headerText}
                    size={32}
                    onPress={() => { navigation.goBack() }}

                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: colors.CardBackground, fontSize: 25, fontWeight: 'bold' }}>Fast Food </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, }}>
                <BadgedIcon
                    type="material-community"
                    name='cart' size={35}
                    color={colors.CardBackground}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: parameters.headerHeight,
        backgroundColor: colors.buttons,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30
    }

})