import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Button from './Button';

export default function Scan ({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);

    //const useNavigation = useNavigation();
    
    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');

        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
            setScanned(true);
            //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            navigation.navigate('Item', {data});
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
        <View>
            <Button title={'Tap to Scan'} icon={'camera'} color={'orange'} onPress={() => 
            setScanned(false)} /> 
        </View>
        </>        
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})