import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from './componenetes/DataContext';

import Inicial from './componenetes';
import Consultas from './componenetes/telas/Consulta'
import Unhas from './componenetes/telas/telas_servicos/Unhas'
import Mao from './componenetes/telas/telas_servicos/Mao'
import Agendado from './componenetes/telas/Agendado';
import Agendamentos from './componenetes/telas/telas_servicos/Agendamentos';
import Audios from './componenetes/telas/Audio'

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
    <NavigationContainer style={styles.container}>
      <StatusBar style='auto'/>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }}/>
        <Stack.Screen name="Consultas" component={Consultas} options={{ headerShown: false }}/>
        <Stack.Screen name="Unhas" component={Unhas} options={{ headerShown: false }}/>
        <Stack.Screen name="Mao" component={Mao} options={{ headerShown: false }}/>
        <Stack.Screen name="Agendado" component={Agendado} options={{ headerShown: false }}/>
        <Stack.Screen name="Agendamentos" component={Agendamentos} options={{ headerShown: false }}/>
        <Stack.Screen name="Audios" component={Audios} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F3EE",
    height: "100%"
    
  },
});
