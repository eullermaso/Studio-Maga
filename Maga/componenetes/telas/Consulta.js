import React from "react";

import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native';
import Topo from '../Topo'
import Texto from '../Texto'
import Botao from '../Botao'
import eyebrow from '../../assets/Images_botao/eyebrow.png'
import Arrow from '../../assets/Images_botao/Arrow.png'
import depilacao from '../../assets/Images_botao/depilacao.png'
import nail from '../../assets/Images_botao/nail.png'
import skincare from '../../assets/Images_botao/skincare.png'
import { useNavigation } from '@react-navigation/native';
import Unhas from '../telas/telas_servicos/Unhas'

export default function Consulta(){
    const navigation = useNavigation();
    return <>
    <Topo/>
    <View style={estilos.Descricao}>
        <Texto style={estilos.text}>Serviços</Texto>
    </View>
    <TouchableOpacity style={estilos.seta} onPress={() => navigation.goBack()}>
    <Image source={Arrow}></Image>
    </TouchableOpacity>

    <View style={estilos.Buttons}>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={nail} servico={"Unhas"} tela='Mao'></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={skincare} servico={"Skincare"}></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={depilacao} servico={"Depilação"}></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={eyebrow} servico={"Sobrancelha"}></Botao>
    </View>
    
    
    </>
}

const estilos = StyleSheet.create({
    Buttons:{
        gap: 30,
        marginTop:30,
        
       
    },
    Bot:{
        flexDirection: "column-reverse",
        gap: 2,
        alignItems: "center",
        
        
        
    },

    Descricao:{
        alignItems: "center",
        justifyContent:"center",
        paddingTop: 20,
        
    },

    seta:{
        paddingLeft: 30,
    },

    text:{
        fontSize: 20,
        fontWeight: "bold"
    },
    nome:{
        color: "black"
    }
})