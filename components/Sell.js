import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Button from './Button';

const items = [];

export default function ScanB ({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    
    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');

        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
            setScanned(true);
            //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            alert(`Bar code with data ${data} has been scanned!`);
            items.push(data);          
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />           
        </View>
        <View style={styles.button_container}>
            <Button title={'Tap to Scan'} icon={'camera'} color={'orange'} onPress={() => 
                setScanned(false)} />
            <Button title={'Sell'} icon={'camera'} color={'orange'} onPress={() => {
            
                    navigation.navigate('Cart', {items}) 
               }                           
            } 
            />
        </View>
        </>        
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50
    }
});