import React, { useState, useEffect } from "react";
import Topo from "../../Topo";
import { Text, TouchableOpacity, StyleSheet, View, TextInput } from "react-native";
import { useData } from "../../DataContext";

import Arrow from '../../Arrow'
import Texto from "../../Texto";

const Agendamentos = () => {

    const {data, setData} = useData();
    
    const changeData = () => {
        setData("Nenhum Agendamento")
    }

    const [input, setInput] = useState('');

    
    // useEffect para salvar as alterações em 'data'
  useEffect(() => {
    // Coloque aqui o código para salvar 'data' em um banco de dados ou em armazenamento local
    console.log("Salvando data:", data);
  }, [data]); // Este efeito será acionado sempre que 'data' for alterado
    

    return<>
    <Topo/>
        <View style={estilos.Descricao}>
            <Text style={estilos.nome}>Agendamentos</Text>
        </View>
        <Arrow/>

        
        <View style={estilos.MainView}>
        <Text style={estilos.Text}>{input}</Text>
            <View style={estilos.View}>
                <View>
                    <Text style={estilos.Text}>{data}</Text>
                </View>
                <View>
                    <Text style={estilos.Text}></Text>
                </View>
                
                {/* <TouchableOpacity style={estilos.button} onPress={changeData}></TouchableOpacity> */}
            </View>
            
        <TouchableOpacity style={estilos.botao} onPress={changeData}>
            <Text style={{color:"white"}}>Deletar</Text>
        </TouchableOpacity>

        {/* <TextInput style={estilos.input} value={input} onChangeText={setInput} placeholder="Adicione uma observação" keyboardType=""></TextInput> */}
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
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30,
        borderRadius: 10,
        width: "90%",
        height: 80,
        backgroundColor: "white",
        

    },
    MainView:{
        alignItems: "center",
        

        
    },
    Text:{
        fontSize: 20,

    },
    Descricao:{
        alignItems: "center",
        justifyContent:"center",
        marginTop: 20,
        marginBottom: 10
        
    },
    nome:{
        fontSize: 27,
        fontWeight: "bold"
    },
    botao:{
        width: 100,
        backgroundColor: "grey",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        borderRadius: 15,
    },
    input:{
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
        marginTop: 50,
        width: 300,
        height: 50

    }
    
})

export default Agendamentos;