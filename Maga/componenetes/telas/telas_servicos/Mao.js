import React from "react";

import Topo from '../../Topo'
import { View, StyleSheet} from 'react-native';
import Lista from '../Lista'
import Arrow from "../../Arrow";
import Texto from "../../Texto";

export default function Mao(){
    return<>
    <Topo></Topo>
    <View style={estilos.descricao}>
        <Texto style={estilos.text}>Unhas</Texto>
    </View>
    <Arrow/>
    <Lista></Lista>
    
    </>
}


const estilos = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight: "bold"
    },
    descricao:{
        alignItems: "center",
        justifyContent:"center",
        paddingTop: 20,
        
    },
})