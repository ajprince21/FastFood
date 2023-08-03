import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles';
import { Icon } from '@rneui/themed';
import { filterData } from '../global/Data';

const HomeScreen = ({ navigation }) => {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState('0')
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
                            <Text style={{ marginLeft: 5, paddingRight: 5 }}>Now</Text>
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
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => {
                                    setIndexCheck(item.id)
                                }}
                            >
                                <View style={indexCheck === item.id ? styles.smallCardSelected : styles.smallCard}>
                                    <Image
                                        style={{ height: 60, width: 60, borderRadius: 30 }}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? styles.smallCardSelectedText : styles.smallCardText}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free delivery now</Text>
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
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey2,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 2
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardText: {
        color: colors.grey2,
        fontWeight: 'bold',

    },
    smallCardSelectedText: {
        color: colors.CardBackground,
        fontWeight: 'bold',
    }
})