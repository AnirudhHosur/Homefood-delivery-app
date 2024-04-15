import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Swiper from "react-native-swiper";

export default function SignInWelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: "bold" }}>DISCOVER HOME COOKED FOOD</Text>
                <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: "bold" }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://i0.wp.com/www.anotedlife.com/wp-content/uploads/2023/04/ella-olsson-KPDbRyFOTnE-unsplash-scaled.jpg?fit=1900%2C1267&ssl=1" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaq259VetqqH-GY2urgMq6aCg8AXPnnaJlmA&usqp=CAU" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://i.insider.com/5d65609c6f24eb1542208c82?width=1136&format=jpeg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://blog.tefal.co.uk/wp-content/uploads/2017/08/25-reasons-home-cooked-is-always-best.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style={{ marginHorizontal: 20, marginTop: 30, marginBottom: 30 }}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={() => {
                            navigation.navigate("SignUpScreen")
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },

    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },

    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.buttons
    },

    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})