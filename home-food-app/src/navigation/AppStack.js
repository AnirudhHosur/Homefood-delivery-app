import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';

const App = createNativeStackNavigator();

export function AppStack() {

    return (
        <App.Navigator>
            <App.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <App.Screen
                name="RestaurantsMapScreen"
                component={RestaurantsMapScreen}
                options={{
                    headerShown: false,
                    //...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </App.Navigator>
    
    )
}