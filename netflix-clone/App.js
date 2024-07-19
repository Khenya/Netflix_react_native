import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';


export default function App() {
  return (
    <NavigationContainer>
      {/* <DownloadScreen /> */}
      {/* <HomeScreen/> */}
      {/* <SearchScreen /> */}

      <ProfileScreen/>
    </NavigationContainer>
  );
}

