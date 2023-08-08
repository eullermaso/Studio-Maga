import React from "react";
import { Text,StyleSheet } from 'react-native'


export default function Texto({children, style}){
    return <>
        <Text style={[style]}>{ children }</Text>
    
    </>

}

const estilos = StyleSheet.create({
    texto: {
        
        fontWeight: "bold",
        color: "black",
        
        
    }

})