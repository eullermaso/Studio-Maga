import React from "react";
import Texto from './Texto'
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Botao({servico, menu,tela,design,nome, finalizar}){

    
    
    const navigation = useNavigation();
    return <>
    <TouchableOpacity style={[estilos.botao, design]} onPress={()=>{navigation.navigate(tela), finalizar}}>
        <Texto style={[estilos.nomeBotao, nome]}>{servico}</Texto>
        <Image source={menu}></Image>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao:{
        borderRadius:40,
        backgroundColor: "#E0AFA0",
        width: 300,
        height: 100,
        alignSelf: "center",
        alignItems: "center",
        gap: 20,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15 


    },
    nomeBotao:{
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    }
})