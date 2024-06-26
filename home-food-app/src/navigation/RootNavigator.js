import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import { SignInContext } from "../context/authContext";
import { AppStack } from "./AppStack";

export default function RootNavigator() {

    const { signedIn } = useContext(SignInContext)

    return (
        <NavigationContainer>
            {
                signedIn.userToken === null  ?  <AuthStack />: <AppStack />
            }
        </NavigationContainer>
    )
}