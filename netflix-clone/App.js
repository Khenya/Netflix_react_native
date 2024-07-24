import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import DownloadScreen from "./src/screens/DownloadScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DescripcionMovieScreen from "./src/screens/DescripcionMovieScreen";
import PlayMovieScreen from "./src/screens/PlayMovieScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <DownloadScreen /> */}
        {/* <HomeScreen/> */}
        {/* <SearchScreen /> */}

        {/* <ProfileScreen/> */}
        {/* <DescripcionMovieScreen/> */}
        <PlayMovieScreen />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
