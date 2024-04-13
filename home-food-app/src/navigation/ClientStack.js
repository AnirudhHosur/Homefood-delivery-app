import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableWithoutFeedback, ImageBackground } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const ClientSearch = createNativeStackNavigator()

function ClientStack() {
    
    return(
        <ClientSearch.Navigator>

            <ClientSearch.Screen 
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen 
                name = "SearchResultScreen"
                component = {SearchResultScreen}
                options = {
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
