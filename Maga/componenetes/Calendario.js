import React from "react";
import Calendar from "react-native-calendars/src/calendar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Botao from "./Botao";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";
import { useData } from "./DataContext";


export default function Calendario({}) {
  const {data, setData} = useData();
  const [colorful, setColorful] = useState("grey")

  const changeColor = () => {
    if(colorful === 'grey'){
      setColorful("orange")
    }else{
      setColorful("grey")
    }
  }

  return (
    <>
      <Calendar style={estilos.calendar}></Calendar>
      <View style={estilos.tabela}>
        <TouchableOpacity style={[estilos.hora, {backgroundColor: colorful}]} onPress={() => {setData(data + "     14:00"); changeColor();}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>14:00</Text>
        </TouchableOpacity>
      </View>




      <Botao design={estilos.botao} servico="Finalizar" tela="Agendado" ></Botao>
    </>
  );
}

const estilos = StyleSheet.create({
  calendar: {
    backgroundColor: "BCB8B1",
  },
  descricao: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 50,
    width: 200,
  },
  corpo: {
    alignItems: "center",
  },
  botao: {
    height: 40,
    width: 200,
    marginTop: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  hora: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  tabela: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 10,
  },
});
