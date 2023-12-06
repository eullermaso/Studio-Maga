import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Agendamentos from "./telas_servicos/Agendamentos";
import { useData } from "../DataContext";

const produtos = [
    {
        id: "1",
        info: ['Mão', '25.00'],
        imagem: require('../../assets/imagem_unhas/unhas_mao.jpg')
    },
    {
        id: "2",
        info: ['Pé', '23.00'],
        imagem: require('../../assets/imagem_unhas/unhas_pe.jpg')
    },
    {
        id: "3",
        info: ['Pé e Mão', '45.00'],
        imagem: require('../../assets/imagem_unhas/unhas_pe_mao.jpg')
    },
]


const setListaDesejos = (x) => {
    if(x === "1"){
        return (
            console.log("Certo")
        )
    }else{
        return console.log("Errado")
    }

};


export default function Lista() {
    const navigation = useNavigation();

    const nome = {
        nome: "Euller"
    }

    const {data, setData} = useData();

    const numerosDosIds = produtos.map((produto) => {
        return (produto.id); // Converte o ID para número usando parseInt
      });

      console.log("Números dos IDs dos produtos:", numerosDosIds);

    const changeData = (item) => {
        setData(item)
        console.log("Mudou")
    }

    return <>

        <FlatList
            style={estilos.corpo}
            data={produtos}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>

                <View style={estilos.retrato}>
                    <View style={estilos.produtos}>
                    <TouchableOpacity style={estilos.botao} onPress={() => {navigation.navigate("Unhas", {nome}), console.log(item.id, item.info[0]), setListaDesejos(item.id),changeData(item.info[0]+ "   R$ " + item.info[1])}}>
                        <View style={estilos.lista}>
                        
                                <View style={estilos.figura}>
                                    <ImageBackground style={estilos.img} source={item.imagem} resizeMode="cover" ></ImageBackground>
                                </View>
                            
                        <View style={estilos.info}>
                                <Text style={estilos.descricao}>{item.info[0]}</Text>
                                <Text style={estilos.valor}>R${item.info[1]}</Text>
                            </View>
                           

                        </View>
                        </TouchableOpacity>

                    </View>
                </View>
            }
        />


    </>
}

const estilos = StyleSheet.create({
    corpo: {
        marginTop: 30,
        height: "100%",
    },
    produtos: {
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        // backgroundColor: "red",
        
       
    },
    lista: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        borderColor: "black",
        borderStyle: "solid",
        borderBottomWidth: 0,
        paddingBottom: 4,
        marginLeft: 0,
        

    },
    figura: {
        borderRadius: 10,
        width: 95,
        height: 95,
        marginTop: 5,

    },
    descricao: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: "bold",
    },
    botao: {
        borderRadius: 10,
        width: '95%',
        height: 100,
        marginLeft: 10,
        backgroundColor: "#d6ccc2",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
        
        
       
    },
    img: {
        resizeMode: "cover",
        flex: 1,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#bb9457",

    },
    info: {
        alignItems: "center",
        marginLeft: 40,
        width: 150

    },
    valor: {
        fontSize: 20
    },

    retrato: {
        marginTop: 0,
    }


})