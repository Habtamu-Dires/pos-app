import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function LoginScreen({ navigation }) {
    
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView style={styles.container} keyboardDismissMode={'on-drag'}>
            <Text style={styles.headerText}>Welcome to POS System APP</Text>
            <Text style={styles.regularText}>Login to continue</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={onChangeUsername}
                placeholder = {'email'}
            />            
            <TextInput
                style={styles.input}
                value={password}
                onChangeText = {onChangePassword}
                placeholder={'password'}
                secureTextEntry = {true}
            />
            <Pressable style={styles.button} onPress={()=>{
                navigation.navigate('DrawerNavigation')
            }}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>                
        </ScrollView>
    );
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