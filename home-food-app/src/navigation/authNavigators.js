import React, { useState, useRef } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createNativeStackNavigator();

export default function AuthStack () {
    return(
        <Auth.Navigator>
            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "DrawerNavigator"
                component = {DrawerNavigator}
                options = {{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            {/* <Auth.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            /> */}

            <Auth.Screen
                name = "RestaurantsMapScreen"
                component = {RestaurantsMapScreen}
                options = {{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}