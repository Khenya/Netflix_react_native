import { createStackNavigator } from "@react-navigation/stack";

import DownloadScreen from "../screens/DownloadScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export const DownloadStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="downloadScreen" component={DownloadScreen}></Stack.Screen>
        <Stack.Screen name="descripcionMovieScreen" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="playMovieScreen" component={PlayMovieScreen}></Stack.Screen>
        <Stack.Screen name="profileScreen" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };