import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './(tabs)/home';
import PetDetail from '@/components/uri/PetDetails';
import ProductDetail from '@/components/uri/ProductDetail';

// กำหนด RootStackParamList
export type RootStackParamList = {
    HomeScreen: undefined;
    PetDetail: {
        pet: {
            id: number;
            name: string;
            image: string;
            gender: string;
            age: number;
            breed: string;
            history: string;
        };
    };
    ProductDetail: {
        product: {
            id: number;
            name: string;
            image: string;
            price: number;
            category: string;
        };
    };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PetDetail" component={PetDetail} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
