import React from "react";
import Calendar from "react-native-calendars/src/calendar";
import { StyleSheet, View } from "react-native";
import Botao from "./Botao";
import { useNavigation } from "@react-navigation/native";



export default function Calendario({}) {
  const navigation = useNavigation();

  const teste = () => {
    return console.log("TESTE")
  }

  return (
    <>
      <Calendar style={estilos.calendar}></Calendar>
      <View style={estilos.tabela}>
        <Botao design={estilos.hora} servico="13:00"></Botao>
        <Botao design={estilos.hora} servico="10:30"></Botao>
        <Botao design={estilos.hora} servico="17:55"></Botao>
      </View>

      <Botao design={estilos.botao} servico="Finalizar" tela="Agendado" finalizar={teste()}></Botao>
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
    backgroundColor: "grey",
  },
  tabela: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 10,
  },
});
