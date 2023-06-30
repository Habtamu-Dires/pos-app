import React from "react";
import { ScrollView, TextInput, StyleSheet,Text } from "react-native";


export default function Register() {
    return(
        <ScrollView style={styles.container}>
            <Text>List of inputs</Text>
            <Text>Create a bar code</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})