import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';
import { Icon } from '@rneui/themed';
import { colors } from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    drawerLabel: 'Home',
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name='home'
                            type='material'
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}