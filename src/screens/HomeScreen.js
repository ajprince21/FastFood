import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles';
import { Icon } from '@rneui/themed';

const HomeScreen = ({ navigation }) => {
    const [delivery, setDelivery] = useState(true);
    return (
        <View style={styles.container}>
            <HomeHeader type={'menu'} navigation={navigation} />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true)
                            }}
                        >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false)
                            }}
                        >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>
                                <Text style={styles.deliveryText}>Pick UP</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                            <Icon
                                type='material-community'
                                name='map-marker'
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ marginLeft: 5 }}>148, Manbhawan Nagar</Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon
                                type='material-community'
                                name='clock-time-four'
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ marginLeft: 5 }}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            type='material-community'
                            name='tune'
                            color={colors.grey1}
                            size={26}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,

    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 10
    },
    clockView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        backgroundColor: colors.CardBackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },
    addressView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 3,
        justifyContent: 'space-between',
        paddingHorizontal:20
    }
})