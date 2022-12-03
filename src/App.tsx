import { useEffect, useState } from 'react';
import { StatusBar, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen  from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export function App() {
  const [isLoading, loading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => loading(false), 3000)
  }, [])

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
