import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "./src/screens/HomeScreen";
import DownloadScreen from "./src/screens/DownloadScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DescripcionMovieScreen from "./src/screens/DescripcionMovieScreen";
import PlayMovieScreen from "./src/screens/PlayMovieScreen";

import { ComingSoonStack } from "./src/navigators/ComingSoonNavigator";
import { DownloadStack } from "./src/navigators/DownloadNavigator";
import { HomeStack } from "./src/navigators/HomeNavigator";
import { SearchStack } from "./src/navigators/SearchNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            // borderWidth:2,
            // borderColor: 'white',

            height: 60,
            position: "absolute",
            bottom: 25,
            right: 45,
            left: 45,
            // margin:25,
            borderRadius: 40,
            backgroundColor: "gray",
            // overflow:'hidden'
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack}></Tab.Screen>
        <Tab.Screen name="Search" component={SearchStack}></Tab.Screen>
        <Tab.Screen name="Comming" component={ComingSoonStack}></Tab.Screen>
        <Tab.Screen name="Download" component={DownloadStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function setIcon(route, routeStatus) {
  let iconName = "";
  if (route.name === "Home") {
    iconName = "home";
  }
  if (route.name === "Search") {
    iconName = "search";
  }
  if (route.name === "Comming") {
    iconName = "youtube";
  }
  if (route.name === "Download") {
    iconName = "download";
  }

  let color = "white";
  return (
    <AwesomeIcon
      name={iconName}
      size={40}
      color={color}
      
      // style={{ padding: 10 }}
    />
  );
}
