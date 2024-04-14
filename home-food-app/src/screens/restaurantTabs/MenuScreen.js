import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { colors } from "../../global/styles";
import { menuData, specialData } from "../../global/Data";

export default function MenuScreen({ navigation, restaurant, onPress }) {

    const handlePress = () => {
        //navigation.navigate("ProductSectionScreen")
    }

    return (
        <View style={styles.container}>
            <View>
                {specialData.map((items) =>
                    <View key={items.key} style={styles.view1}>
                        <TouchableOpacity onPress={onPress}>
                            <View style={styles.view2}>
                                <Icon name='star' type="material-community" color="gold" />
                                <Text style={styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View>
                {menuData.map((items) =>

                    <View key={items.key} style={styles.view1}>
                        <TouchableOpacity onPress={onPress}>
                            <View style={styles.view2}>
                                <Text style={styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20
    },

    view1: {
        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5
    },

    text1: {
        color: colors.grey3,
        fontSize: 18,
        fontWeight: "bold"
    }
})