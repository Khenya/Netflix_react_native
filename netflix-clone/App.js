import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import DownloadScreen from './src/screens/DownloadScreen';

export default function App() {
  return (
    <NavigationContainer>
      <DownloadScreen />
      {/* <HomeScreen/> */}

    </NavigationContainer>
  );
}

