import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import Header from './Header';
import Footer from './Footer';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function Main () {
    return(
        <>
        <View style={styles.container}>
            <Header />
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen}
                    options={{headerShown: false}}
                    />
                <Stack.Screen 
                    name="DrawerNavigation" 
                    component={DrawerNavigation}
                    options={{headerShown: false, gestureEnabled: false}}                    
                    />
                
            </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
            <Footer />
        </View>
        </>        
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    footerContainer:{
       backgroundColor: '#333333'
    }
 })