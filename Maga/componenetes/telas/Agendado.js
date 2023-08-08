import React from "react";

import { Image, Text, View, StyleSheet, Button, ScrollView} from 'react-native'

import Botao from "../Botao";

export default function Agendado(){
    

    return<>
    
    <View style={estilos.fundo}>
        <Text style={estilos.text}>Agendado com Sucesso!</Text>

    </View>

    <View>
        <Botao design={estilos.Botao} servico="Home" tela='Inicial'></Botao>
    </View>
    
    
    
    </>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "#F4F3EE",
        alignItems: "center",
        justifyContent: "center", 
        flex: 1
        
    },
    text:{
        fontSize: 30,
        fontWeight: "bold"
    },
    Botao:{
        height: 40,
        width: 200,
        marginBottom: 80,
        alignItems: "center",
        justifyContent: "center"
    }
})