import { createStackNavigator } from "@react-navigation/stack";

import CommingSoonScreen from "../screens/CommingSoonScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";

const Stack = createStackNavigator();

export const ComingSoonStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="commingSoonScreen" component={CommingSoonScreen}></Stack.Screen>
        <Stack.Screen name="profileScreen" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="descripcionMovieScreen" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="playMovieScreen" component={PlayMovieScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };

