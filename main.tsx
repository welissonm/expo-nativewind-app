import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from './src/App';

export default function Main() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
registerRootComponent(Main);