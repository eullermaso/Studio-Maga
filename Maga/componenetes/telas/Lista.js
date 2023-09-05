import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


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

    return <>

        <FlatList
            style={estilos.corpo}
            data={produtos}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>

                <View style={estilos.retrato}>
                    <View style={estilos.produtos}>
                        <View style={estilos.lista}>
                        <View style={estilos.info}>
                                <Text style={estilos.descricao}>{item.info[0]}</Text>
                                <Text style={estilos.valor}>R${item.info[1]}</Text>
                            </View>
                            <TouchableOpacity style={estilos.botao} onPress={() => {navigation.navigate("Unhas"), console.log(item.id), setListaDesejos(item.id)}}>
                                <View style={estilos.figura}>
                                    <ImageBackground style={estilos.img} source={item.imagem} resizeMode="cover" ></ImageBackground>
                                </View>
                            </TouchableOpacity>

                        </View>


                    </View>
                </View>
            }
        />


    </>
}

const estilos = StyleSheet.create({
    corpo: {
        marginTop: 10,
        height: "100%",
    },
    produtos: {
        paddingBottom: 0,
        paddingTop: 10,
        paddingLeft: 0,
    },
    lista: {
        flexDirection: "row",
        gap: 100,
        alignItems: "center",
        borderColor: "black",
        borderStyle: "solid",
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginLeft: 0,
        justifyContent: "center",
        backgroundColor: "pink"


    },
    figura: {
        borderRadius: 10,
        width: 100,
        height: 100,
        marginTop: 5,

    },
    descricao: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: "bold",
    },
    botao: {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    img: {
        resizeMode: "cover",
        flex: 1,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black",

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