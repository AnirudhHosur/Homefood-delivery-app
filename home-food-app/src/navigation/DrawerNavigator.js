import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return(
        <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
            screenOptions = {{
                //activeTintColor: colors.buttons,
                headerShown: false
            }}
        >
            <Drawer.Screen 
                name="RootClientTabs"
                component={RootClientTabs}

                options={{
                    title: 'Client',
                    drawerIcon: ({focussed, size}) => (
                        <Icon 
                            name="home"
                            type="material"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen 
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}

                options={{
                    title: 'Business Console',
                    drawerIcon: ({focussed, size}) => (
                        <Icon 
                            name="business"
                            type="material"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}