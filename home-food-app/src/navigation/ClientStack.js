import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableWithoutFeedback, ImageBackground } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferenceScreen from "../screens/PreferenceScreen";

const ClientSearch = createNativeStackNavigator()

function ClientStack({ navigation, route }) {

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route)

        if (routeName === "RestaurantHomeScreen" || routeName === "MenuProductScreen" || routeName ==="PreferenceScreen") {
            navigation.setOptions({
                tabBarStyle: { display: 'none' }
            });
        }
        else {
            navigation.setOptions({
                tabBarStyle: { display: 'flex' }
            });
        }

    }, [navigation, route])

    return (
        <ClientSearch.Navigator>

            <ClientSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="RestaurantHomeScreen"
                component={RestaurantHomeScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="MenuProductScreen"
                component={MenuProductScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="PreferenceScreen"
                component={PreferenceScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({
})

export default ClientStack;
