import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Screens } from './src';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Screens/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
