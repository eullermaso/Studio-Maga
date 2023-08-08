import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet,Button, TouchableOpacity, ImageBackground } from 'react-native';
import Botao from '../Botao'
import Consultas from './Consulta'
import { useNavigation } from '@react-navigation/native';
const img1 =  '../../assets/imagem_unhas/unhas_mao.jpg';
const img2 =  '../../assets/imagem_unhas/unhas_pe.jpg';
const img3 =  '../../assets/imagem_unhas/unhas_pe_mao.jpg';
import Texto from '../Texto'





const produtos = [

    {
        
        id: "01",
        info: ['Mão', '25.00'],
        imagem: require('../../assets/imagem_unhas/unhas_mao.jpg')
    },
    {
        id: "02",
        info: ['Pé', '23.00'],
        imagem: require('../../assets/imagem_unhas/unhas_pe.jpg')
    },
    {
        id: "03",
        info: ['Pé e Mão', '45.00'],
        imagem: require('../../assets/imagem_unhas/unhas_pe_mao.jpg')
    },
]

export default function Lista(){
    const navigation = useNavigation();

    return<>

        
        <FlatList
        
            style={estilos.corpo}
            data={produtos}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            
            
        <View style={estilos.retrato}>
            <View style={estilos.produtos}>
                <View style={estilos.lista}>
                <TouchableOpacity style={estilos.botao} onPress={()=>navigation.navigate("Unhas")}>
                    <View style={estilos.figura}>
                        <ImageBackground style={estilos.img} source={item.imagem} resizeMode="cover" ></ImageBackground>
                        </View>
                        </TouchableOpacity>
                        <View style={estilos.info}>
                        <Text style={estilos.descricao}>{item.info[0]}</Text>
                        <Text style={estilos.valor}>R${item.info[1]}</Text>
                        </View>
                    </View>
                    
                    
                </View>
                </View>
                }
        />
       
    
    
    
    </>
}

const estilos = StyleSheet.create({
    corpo:{
        
        marginTop:20,
        flex:1,
        height: "100%"
       
       // backgroundColor: "blue"
    },
    produtos:{
        paddingBottom:20,
        paddingTop:20,
        paddingLeft: 20,
        //borderColor: "black",
        //borderStyle: "solid",
        //borderWidth: 1,
        
        //backgroundColor: "red"

    },
    lista:{
        flexDirection: "row",
        gap: 20,
        //backgroundColor: "green",
        alignItems: "center"
    },
    figura:{
        backgroundColor: "white",
        borderRadius: 10,
        width: 150,
        height: 200,
    }, 
    
    descricao:{
        fontSize: 25,
        marginBottom:100,
        fontWeight: "bold"
    },
    botao:{
        borderRadius: 10,
        width: 150,
        height: 200,
        
        
    },
    img:{
        resizeMode: "cover",
        flex: 1,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black"
        
    },
    info:{
        alignItems: "center",
        //backgroundColor: "red",
        marginLeft: 40,
        
    },
    valor:{
        fontSize: 20
    },

    retrato:{
       // borderTopColor: "black",
       // borderStyle: "solid",
        //borderBottomColor: "transparent",
       // borderWidth: 1,
        marginTop: 0
    }


})