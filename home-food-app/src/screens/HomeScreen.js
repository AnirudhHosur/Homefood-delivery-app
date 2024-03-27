import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";


export default function HomeScreen() {
    return(
        <View style = {styles.container}>
            <HomeHeader />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
})