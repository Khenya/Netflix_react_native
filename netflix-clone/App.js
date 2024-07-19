import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import SearchScreen from './src/screens/SearchScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <DownloadScreen /> */}
      {/* <HomeScreen/> */}

      <SearchScreen />
    </NavigationContainer>
  );
}

