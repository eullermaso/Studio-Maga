import React from "react";
import { Image, Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native'
import Servico from '../assets/Images_botao/consultar.png'
import Texto from './Texto'
import Botao from './Botao'
import Agenda from'../assets/Images_botao/agenda.png'
import Duvida from'../assets/Images_botao/duvidas.png'
import grupo from '../assets/Images_botao/grupo.png'
import WaveSound from '../assets/Images_botao/wave_sound.png'
import videoCamera from '../assets/Images_botao/camera.png'

export default function Corpo({}){
    return<>
    
    <View style={estilos.corpo}>
        
        <View  style={estilos.botoes}>
            <Botao servico={"Consultar Serviços"} menu={Servico} tela='Consultas'></Botao>
            <Botao servico={"Agendamentos"} menu={Agenda} tela='Agendamentos'></Botao>
            <Botao servico={"Câmera"} menu={videoCamera} tela='photoCamera'></Botao>
            <Botao servico={"Áudio"} menu={WaveSound} tela='Audios'></Botao>
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
        gap: 50,
        marginBottom: 50,

    },

})