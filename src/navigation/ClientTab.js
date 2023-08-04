import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import OrderScreen from '../screens/OrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons,
                headerShown: false
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='home'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='search'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{
                    tabBarLabel: 'My Orders',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='view-list'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='person'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({

})