import React, { useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable'

import { Formik } from 'formik';
import auth from "../../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { SignInContext } from "../../context/authContext";

export default function SignInScreen({ navigation }) {

    const { dispatchSignedIn } = useContext(SignInContext)

    const [TextInput2Focussed, setTextInput2Focusses] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    async function signIn(data) {
        try {
            const { email, password } = data;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user) {
                Alert.alert("User signed in successfully!");
                dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: {userToken: "signed-in"} })
            }
        } catch (error) {
            Alert.alert("Authentication Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Sign-In</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1}>Please enter email and password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    signIn(values)
                }}
            >
                {(props) => (
                    <View>
                        <View style={{ marginTop: 20 }}>
                            <View>
                                <TextInput
                                    style={styles.textInput1}
                                    placeholder="Email"
                                    ref={textInput1}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                            </View>

                            <View style={styles.TextInput2}>
                                <Animatable.View animation={TextInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                                    <Icon
                                        name="lock"
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                    />
                                </Animatable.View>
                                <TextInput
                                    style={{ width: "80%" }}
                                    placeholder="Password"
                                    ref={textInput2}
                                    onFocus={() => {
                                        setTextInput2Focusses(false)
                                    }}
                                    onBlur={() => {
                                        setTextInput2Focusses(true)
                                    }}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <Animatable.View animation={TextInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                                    <Icon
                                        name="visibility-off"
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        style={{ marginRight: 10 }}
                                    />
                                </Animatable.View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                            <Button
                                title="SIGN IN"
                                buttonStyle={parameters.styledButton}
                                titleStyle={parameters.buttonTitle}
                                onPress={props.handleSubmit}
                            //onPress={() => { navigation.navigate('DrawerNavigator') }}
                            />
                        </View>

                    </View>
                )}
            </Formik>

            <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forgot Password ?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Sign In with Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Sign In with Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginTop: 25, marginLeft: 20 }}>
                <Text style={{ ...styles.text1 }}>New on HomeFood ?</Text>
            </View>

            <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        height: 50,
        paddingLeft: 15
    },

    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: 50,
        paddingLeft: 15
    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})