import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Main from './components/MainComponent';


export default function App() {
  return (
    <NavigationContainer>
        <Main />
    </NavigationContainer>    
  );
    
}