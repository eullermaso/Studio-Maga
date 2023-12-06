import React, {useState, useRef, useEffect} from "react";

import {Video, ResizeMode, Audio} from 'expo-av';
import Botao from "../Botao";

import { StyleSheet, Button, Text, View } from "react-native";
import Topo from "../Topo";
import Texto from '../Texto'
import Arrow from '../Arrow'

const Audios = () => {

    const video = useRef(null);

    const [status, setStatus] = useState({});


    const [audioStatus, setAudioStatus] = useState(false);

    const [sound, setSound] = useState(new Audio.Sound())

    useEffect(() => {
        (async () => {
            console.log('status', audioStatus)
            if(audioStatus){
                await sound.loadAsync(require('../../assets/audio.mpeg'))
                try { await sound.playAsync()} catch (e) {console.log(e)}
            }else{
                await sound.stopAsync()
                await sound.unloadAsync()
            }
        })()
    },[audioStatus])


    return <>
    <Topo/>

    <View style={estilos.Descricao}>
        <Texto style={estilos.text}>Serviços</Texto>
    </View>
    <Arrow/>

    <Video ref={video} style={estilos.video} source={require('../../assets/Video2.mp4')} useNativeControls resizeMode={ResizeMode.COVER} isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />

    <View style={estilos.play}>
    <Button color={audioStatus ? 'red':'green'} title={"Tocar/Parar"} onPress={()=>setAudioStatus(!audioStatus)} 
    ></Button>
    </View>
    
    </>

}

const estilos = StyleSheet.create({
    video: {
      width: "90%",
      height: 170,
      alignSelf: "center",
      borderRadius: 30,
      borderColor: "black",
      borderWidth: 2,
      margin: 10,
      marginTop: 50,
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
    play:{
        borderRadius: 10,
        width: "100%",
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',

    }

})

export default Audios;