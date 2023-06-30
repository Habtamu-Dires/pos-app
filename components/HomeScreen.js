import React from "react";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";

export default function Home({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome To POS App</Text>
            <Pressable 
                style={styles.button}
                onPress={()=> navigation.navigate('Sell')}
             >
                <Text style={styles.buttonText}>Sell</Text>
            </Pressable>
            <Pressable 
              style={styles.button}
              onPress = {() => navigation.navigate('ScanB')}
            >
                <Text style={styles.buttonText}>Scan</Text>
            </Pressable>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
      },
    headerText: {
        padding: 50,
        fontSize: 34,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      regularText: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      input:{
        height: 40,
        padding: 10,
        margin: 12,
        borderWidth: 1,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
      },
      button:{
        fontSize: 32,
        backgroundColor: '#EE9972',
        paddingVertical: 12,
        marginVertical: 8,
        margin: 120,
        borderRadius: 24
      },
      buttonText: {
        textAlign: "center",
        fontSize: 24
      }
})