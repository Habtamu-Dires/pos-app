import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, 
        DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import { Button, View } from "react-native";
import { StyleSheet } from "react-native";

import Home from "./HomeScreen";
import Scan from "./Scan";


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return(
    
        <DrawerContentScrollView >
            <DrawerItemList {...props} />
            <DrawerItem 
                label="Logout"
                onPress={() => props.navigation.navigate('Login')}
            /> 
        </DrawerContentScrollView>
        
    )
}

export default function DrawerNavigation({navigation}) {
    return(
        <View style={styles.container}>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>} >
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Scan" component={Scan} />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})