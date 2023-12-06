import React, {useState, useEffect, useRef} from "react";

import { Text, View, StyleSheet, TouchableOpacity, Modal, Image } from "react-native";
import Topo from "../../Topo";
import videoCamera from '../../../assets/Images_botao/camera.png';
import {FontAwesome} from '@expo/vector-icons'

import { Camera } from 'expo-camera'

const photoCamera = () => {
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect (() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    },[]);

    if(hasPermission === null){
        return <View/>
    }

    if(hasPermission === false){
        return <Text>Acesso Negado!</Text>
    }

    async function TakePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true)
            

        }

    }

    return<>
    {/* <Topo/> */}
            <Camera 
            style={{ flex:1 }}
            type={type}
            ref={camRef}
            >
                <View style={{flex:1, backgroundColor: "transparent", flexDirection: "row"}}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                    }}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                        )
                    }}
                    >
                     <Text style={{fontSize: 20, marginBottom: 13, color: 'white'}}>Trocar</Text>   
                    </TouchableOpacity>
                </View>
            </Camera>
            <TouchableOpacity style={style.button} onPress={TakePicture}>
                    <FontAwesome name="camera" size={23} color='#FFF'/>
            </TouchableOpacity>

            {capturedPhoto && 
            <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:20}}>
                    <TouchableOpacity style={{margin: 10}} onPress={() => {setOpen(false)}}>
                        <FontAwesome name="window-close" size={50} color="red"/>
                    </TouchableOpacity>

                    <Image style={{width: '100%', height: 300, borderRadius: 20}}
                    source={{uri: capturedPhoto}}
                    >
                    </Image>
                </View>
                </Modal>}

    </>
}

const style = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 20,
        borderRadius: 10,
        height: 50,
    }
})

export default photoCamera;