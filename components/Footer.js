import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return(
        <View style={footerStyles.container}>
            <Text style={footerStyles.footerText}> 
                All rights are reserved by habTech, 2023
            </Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
    container:{ 
        backgroundColor: '#EE9972',
        marginBottom: 15
    },
    footerText: {
        fontSize: 18, 
        color: 'black', 
        textAlign: 'center',
        fontStyle: 'italic'
    }
})