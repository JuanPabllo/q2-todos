import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { CreateTasks } from './src/screens/createTasks';
import { LoginScreen } from './src/screens/login';
import { RegisterScreen } from './src/screens/register';
import { Tasks } from './src/screens/tasks';
import theme from './src/styles/theme';

export default function App() {
  const Stack = createNativeStackNavigator();
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          <StatusBar barStyle="light-content" animated />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Tasks" component={Tasks} />
            <Stack.Screen name="Create" component={CreateTasks} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
