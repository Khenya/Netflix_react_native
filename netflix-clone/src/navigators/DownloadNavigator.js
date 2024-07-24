import { createStackNavigator } from "@react-navigation/stack";

import DownloadScreen from "../screens/DownloadScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";

const Stack = createStackNavigator();

export const DownloadStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="1" component={DownloadScreen}></Stack.Screen>
        <Stack.Screen name="2" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="3" component={PlayMovieScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };