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
import { LoginScreen } from './src/screens/login';
import theme from './src/styles/theme';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
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
          </Stack.Navigator>
        </NativeBaseProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
