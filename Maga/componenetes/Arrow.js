import React from "react"
import { Image, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Arow from '../assets/Images_botao/Arrow.png'

const Arrow = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={estilos.seta} onPress={() => navigation.goBack()}>
            <Image source={Arow}></Image>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    seta:{
        marginLeft: 20,
        paddingLeft: 10,
        backgroundColor: "white",
        marginRight: 345,
        height: 40,
        justifyContent: "center",
        borderRadius: 20
    },
});

export default Arrow;