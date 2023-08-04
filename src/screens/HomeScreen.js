import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles';
import { Icon } from '@rneui/themed';
import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
                <View style={{ backgroundColor: colors.CardBackground, paddingBottom: 10 }}>
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
                                navigation.navigate('RestaurantsMapScreen')
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
                <View>
                    <FlatList
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={indexCheck}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 10 }}
                        renderItem={({ item, index }) => (
                            <View style={{ marginRight: 10 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promotions</Text>
                </View>
                <View>
                    <FlatList
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={indexCheck}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 10 }}
                        renderItem={({ item, index }) => (
                            <View style={{ marginRight: 10 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Near By Restaurant</Text>
                </View>
                <View>
                    {
                        restaurantsData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}

                                />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {delivery &&
                <View style={styles.floatingButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestaurantsMapScreen')}
                    >
                        <Icon
                            name='place'
                            type='material'
                            size={32}
                            color={colors.buttons}
                        />
                        <Text style={{ color: colors.grey2, textAlign: 'center' }}>Map</Text>
                    </TouchableOpacity>
                </View>
            }
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
    },
    floatingButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
})