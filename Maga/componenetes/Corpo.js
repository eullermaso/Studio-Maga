import React from "react";
import { Image, Text, View, StyleSheet, Dimensions} from 'react-native'
import Servico from '../assets/Images_botao/consultar.png'
import Texto from './Texto'
import Botao from './Botao'
import Agenda from'../assets/Images_botao/agenda.png'
import Duvida from'../assets/Images_botao/agenda.png'
import grupo from '../assets/Images_botao/grupo.png'

export default function Corpo({}){
    return<>
    <View style={estilos.corpo}>
        
        <View  style={estilos.botoes}>
            <Botao design={estilos.botao} servico={"Consultar Serviços"} menu={Servico} tela='Consultas'></Botao>
            <Botao servico={"Consultar Agendamentos"} menu={Agenda} tela=''></Botao>
            <Botao servico={"Dúvidas | Suporte"} menu={grupo} tela=''></Botao>
        </View>
        
    </View>
    
    
    </>
}

const estilos  = StyleSheet.create({
    corpo:{
        marginTop: 80,
        alignSelf: "center"
    },
    botoes:{
        gap: 50

    },
    botao:{

        
    }




})