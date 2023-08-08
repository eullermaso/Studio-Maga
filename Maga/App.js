import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './componenetes';
import Consultas from './componenetes/telas/Consulta'
import Unhas from './componenetes/telas/telas_servicos/Unhas'
import Mao from './componenetes/telas/telas_servicos/Mao'
import Agendado from './componenetes/telas/Agendado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style='auto'/>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }}/>
        <Stack.Screen name="Consultas" component={Consultas} options={{ headerShown: false }}/>
        <Stack.Screen name="Unhas" component={Unhas} options={{ headerShown: false }}/>
        <Stack.Screen name="Mao" component={Mao} options={{ headerShown: false }}/>
        <Stack.Screen name="Agendado" component={Agendado} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F3EE",
    height: "100%"
    
  },
});
