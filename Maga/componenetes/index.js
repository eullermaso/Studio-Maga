import React from "react";
import { Image, Text, View, StyleSheet, Button, ScrollView} from 'react-native'
import Botao from './Botao'
import Corpo from './Corpo'
import Topo from './Topo'
import Texto from './Texto'

export default function Inicial({}){
    return <>
    <Topo/>
    <View style={estilos.corpo}>
        <View  style={estilos.welcome}>
            <Texto style={estilos.mensagem}>Bem-Vindo ao Studio Maga!</Texto>
        </View>
        <Corpo></Corpo>
    </View>
    
    </>
}

 const estilos = StyleSheet.create({
     corpo:{
        marginTop:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#F4F3EE",
       
        
     },

     welcome:{
        marginTop: 50,
        
        
     },

     mensagem:{
        fontWeight: "bold",
        fontSize: 25

     }

    
 })




