import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export default function BusinessConsoleScreen() {
    return(
        <View style = {styles.container}>
            <Text>Welcome to Business</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})