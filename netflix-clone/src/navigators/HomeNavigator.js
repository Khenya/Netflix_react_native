import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ListaPeliculasScreen from "../screens/ListaPeliculasScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="homeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="listaPeliculasScreen" component={ListaPeliculasScreen}></Stack.Screen>
        <Stack.Screen name="descripcionMovieScreen" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="playMovieScreen" component={PlayMovieScreen}></Stack.Screen>
        <Stack.Screen name="profileScreen" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="searchScreen" component={SearchScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };