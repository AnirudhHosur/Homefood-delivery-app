import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../global/styles";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantData } from "../global/Data";

const SCREEN_WIDTH = Dimensions.get("window").width

export default function SearchResultScreen({ navigation, route }) {

    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}>{restaurantData.length} Search Result for {route.params.item}</Text>

            <SearchResultCard
                sceenWidth={SCREEN_WIDTH}
                images={restaurantData[0].images}
                averageReview={restaurantData[0].averageReview}
                numberOfReview={restaurantData[0].numberOfReviews}
                restaurantName={restaurantData[0].restaurantName}
                farAway={restaurantData[0].farAway}
                businessAddress={restaurantData[0].businessAddress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 20
    },

    listHeader: {
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold"
    }
})