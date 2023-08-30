import React from "react";
import logo from '../assets/Imagens_Topo/Studio.png'
import { Image, View, StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
    <View style={estilos.topo}>
        <Image style={estilos.imagem} source={logo}></Image>
    </View>
    
    </>

}


const estilos = StyleSheet.create({
    topo: {
        alignItems: "center",
        width: "100%",
        height: 148 / 368 * width,
        backgroundColor: "white",
        marginTop: 0,
        borderBottomRightRadius: 40,
        justifyContent: "center",
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5 
    },
    imagem: {
        width: 290,
        height: 170,
        

    }


})
