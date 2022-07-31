import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import CadastroClientes from './src/screens/CadastroClientes';
import CadastroPrestadores from './src/screens/CadastroPrestadores';
import ListaPrestadores from './src/screens/ListaPrestadores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box safeArea flex={1}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cliente" component={CadastroClientes} />
            <Stack.Screen name="Prestador" component={CadastroPrestadores} />
            <Stack.Screen name="Lista" component={ListaPrestadores} />
          </Stack.Navigator>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
