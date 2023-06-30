import React from 'react';
import { View,Text } from 'react-native';

export default function Cart({route}) {
    return(
        <View>
            <Text>{route.params.items}</Text>
        </View>
    );
}