import React from "react";
import Texto from './Texto'
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Botao({servico, menu,tela,design,nome, resize, alerta}){

    
    
    const navigation = useNavigation();
    return <>
    <TouchableOpacity style={[estilos.botao, design]} onPress={()=>{navigation.navigate(tela)}}>
        <Texto style={[estilos.nomeBotao, nome]}>{servico}</Texto>
        <Image source={menu} style={resize}></Image>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao:{
        borderRadius:40,
        backgroundColor: "#E0AFA0",
        width: 250,
        height: 80,
        alignSelf: "center",
        alignItems: "center",
        gap: 10,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
        borderColor: "white",
        borderWidth: 0.5, 
    },
    nomeBotao:{
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    }
})