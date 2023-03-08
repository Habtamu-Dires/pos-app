import React from "react";
import { View,Text, StyleSheet } from "react-native";

export default function Header() {
    return(
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>POS System</Text>
        </View>
    )
};

const headerStyles = StyleSheet.create({
    container: { 
        
        backgroundColor: '#EE9972', 
        alignItems: 'center'
    },
    headerText:{
        paddingTop: 40, 
        fontSize: 24, 
        color: 'black'
    }
})
