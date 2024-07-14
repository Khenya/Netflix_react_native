import HomeScreen from './src/screens/HomeScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <DownloadScreen/> 
      {/* <HomeScreen/> */}

    </NavigationContainer>
  );
}

