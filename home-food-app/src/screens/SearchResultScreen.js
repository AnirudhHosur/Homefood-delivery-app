import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { colors } from "../global/styles";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantData } from "../global/Data";

const SCREEN_WIDTH = Dimensions.get("window").width

export default function SearchResultScreen({ navigation, route }) {

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{ backgroundColor: colors.cardbackground }}
                    data={restaurantData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (

                        <SearchResultCard
                            screenWidth={SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            restaurantName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            productData={item.productData}
                            OnPressRestaurantCard={() => {
                                navigation.navigate("RestaurantHomeScreen",
                                    { id: index, restaurant: item.restaurantName })
                            }}
                        />

                    )}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}>{restaurantData.length} Result for {route.params.item}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
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