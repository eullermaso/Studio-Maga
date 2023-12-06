import React from "react";

import { View, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Topo from '../Topo'
import Texto from '../Texto'
import Botao from '../Botao'
import eyebrow from '../../assets/Images_botao/eyebrow.png'
import depilacao from '../../assets/Images_botao/depilacao.png'
import nail from '../../assets/Images_botao/nail.png'
import skincare from '../../assets/Images_botao/skincare.png'
import Arrow from '../Arrow'



export default function Consulta(){
    const navigation = useNavigation();
    return <>
    
    <Topo/>
    <ScrollView>
    <View style={estilos.Descricao}>
        <Texto style={estilos.text}>Serviços</Texto>
    </View>
        <Arrow/>
    <View style={estilos.Buttons}>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={nail} servico={"Unhas"} tela='Mao' resize={estilos.resize}></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={skincare} servico={"Skincare"} tela='EmProducao' resize={estilos.resize}></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={depilacao} servico={"Depilação"} resize={estilos.resize} tela='EmProducao'></Botao>
        <Botao design={estilos.Bot} nome={estilos.nome} menu={eyebrow} servico={"Sobrancelha"} resize={estilos.resize} tela='EmProducao'></Botao>
    </View>
    </ScrollView>
    
    </>
    
}

const estilos = StyleSheet.create({
    Buttons:{
        gap: 30,
        marginTop:30,
        marginBottom: 50,
        
        
       
    },
    Bot:{
        flexDirection: "column-reverse",
        gap:0,
        alignItems: "center",
        width: 200,
        height: 90,
       
    },

    Descricao:{
        alignItems: "center",
        justifyContent:"center",
        paddingTop: 20,
        
    },

    text:{
        fontSize: 30,
        fontWeight: "bold"
    },
    nome:{
        color: "white"
    },
    resize:{
        height: 55,
        width: 55
    }
})