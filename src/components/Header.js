import React from "react";
import {View , Text , StyleSheet, Dimensions} from 'react-native';
import {colors , parameters} from "../global/styles";

import { Icon } from '@rneui/themed';

export default function Header({title, type}){
    return(
        <View style={styles.header}>
            <View   style={{marginLeft:10}}> 
                <Icon 
                    type="MaterialIcons" 
                    name={type}
                    color={colors.headerText} size={28}
                    onPress={()=> {}}
                  
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:parameters.headerHeight,
        backgroundColor:colors.buttons,
        alignItems:'center'
    },
    headerText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30
    }
})