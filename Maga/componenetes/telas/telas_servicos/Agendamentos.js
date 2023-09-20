import React, { useState, useEffect } from "react";
import Topo from "../../Topo";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useData } from "../../DataContext";

const Agendamentos = () => {

    const {data, setData} = useData();
    
    const changeData = () => {
        setData("New")
    }

    
    // useEffect para salvar as alterações em 'data'
  useEffect(() => {
    // Coloque aqui o código para salvar 'data' em um banco de dados ou em armazenamento local
    console.log("Salvando data:", data);
  }, [data]); // Este efeito será acionado sempre que 'data' for alterado
    

    return<>
    <Topo/>
        <View style={estilos.MainView}>
            <View style={estilos.View}>
                <Text style={estilos.Text}>{data}</Text>
                <TouchableOpacity style={estilos.button} onPress={changeData}></TouchableOpacity>
            </View>
        </View>
    </>


};

const estilos = StyleSheet.create({
    button:{
        backgroundColor: "red",
        width: 100,
        height:100
    },
    View:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "80%"
    },
    MainView:{
        alignItems: "center",
        
    },
    Text:{
        fontSize: 30,

    }
})

export default Agendamentos;