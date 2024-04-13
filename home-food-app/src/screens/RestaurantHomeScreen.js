import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import RestaurantHeader from "../components/RestaurantHeader";

export default function RestaurantHomeScreen({ navigation, route }) {

    const { id, restaurant } = route.params

    return (
        <View>
            <RestaurantHeader id={id} navigation={navigation} />
        </View>
    )
} 
