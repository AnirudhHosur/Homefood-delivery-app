import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ClientStack from "./ClientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return(
        <ClientTabs.Navigator
            screenOptions = {{
                activeTintColor: colors.buttons,
                headerShown: false
            }}
        >
            <ClientTabs.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options = {{
                    tabBarLabel: "Home",
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <ClientTabs.Screen 
                //name = "SearchScreen"
                name = "ClientStack"
                component = {ClientStack}
                options = {{
                    tabBarLabel: "Search",
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            name="search"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <ClientTabs.Screen 
                name = "MyOrderScreen"
                component = {MyOrderScreen}
                options = {{
                    tabBarLabel: "My Orders",
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            name="view-list"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <ClientTabs.Screen 
                name = "MyAccountScreen"
                component = {MyAccountScreen}
                options = {{
                    tabBarLabel: "My Account",
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </ClientTabs.Navigator>
    )
}