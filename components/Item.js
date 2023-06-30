import React from "react";
import { ScrollView,Text } from "react-native";

export default function Item({route}) {
    return(
        <ScrollView>
            <Text>{route.params.data}</Text>            
            <Text></Text>
        </ScrollView>        
    );
};