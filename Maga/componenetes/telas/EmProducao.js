import React from "react";
import { View, Image } from "react-native";
import Aguardando from '../../assets/aguardando.png'


const EmProducao = () => {

    return<>
    <View style={{height: "100%", width: "100%", alignItems: 'center', justifyContent:'center'}}>
        <Image source={Aguardando}>

        </Image>

    </View>
    
    </>
}

export default EmProducao;