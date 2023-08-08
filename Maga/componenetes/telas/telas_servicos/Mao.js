import React from "react";

import Topo from '../../Topo'
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';
import F1 from '../../../assets/Splash/SPLASH.png'
import Lista from '../Lista'

export default function Mao(){
    return<>
    <Topo></Topo>
    
    
    <Lista></Lista>
    
    </>
}


const estilos = StyleSheet.create({
    Lista:{

    },
    text:{
        fontSize:30,
        fontWeight: "bold"
    },
    titulo:{
        alignItems: "center",
        marginTop: 20,
        
    },
})