import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert, Switch, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Avatar, Icon } from "react-native-elements";
import { colors } from "../global/styles";
import { signOut as firebaseSignOut, getAuth } from "@firebase/auth"
import { SignInContext } from "../context/authContext";

export default function DrawerContent(props) {

    const { dispatchSignedIn } = useContext(SignInContext)
    const auth = getAuth()
    async function signOut() {
        try {
            await firebaseSignOut(auth);
            console.log("USER SUCCESSFULLY SIGNED OUT")
            Alert.alert("User has signed out!")
            dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
        } catch (error) {
            Alert.alert(error.code)
        }
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 10 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={{ uri: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" }}
                        />

                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>Anirudh Hosur</Text>
                            <Text style={{ color: colors.cardBackground, fontSize: 14, marginRight: 25 }}>anirudhhsdfdfdsfsdfsfosur40@gmail.com</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: -2 }}>
                            <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>My Favourites</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>0</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>My Cart</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            name="credit-card"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            name="loyalty"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            name="settings"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            name="help"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>

            </DrawerContentScrollView>

            <DrawerItem
                label="Sign Out"
                icon={({ color, size }) => (
                    <Icon
                        name="logout"
                        type="material"
                        color={color}
                        size={size}
                    />
                )}
                onPress={() => { signOut() }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    avatar: {
        borderWidth: 4,
        borderColor: 'white',
    },

    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },

    switchText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },

    darkThemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: "bold"
    }
})