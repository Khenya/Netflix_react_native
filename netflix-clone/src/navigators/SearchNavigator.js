import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../screens/SearchScreen";
import ListaPeliculasScreen from "../screens/ListaPeliculasScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";

const Stack = createStackNavigator();

export const SearchStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="searchScreen" component={SearchScreen}></Stack.Screen>
        <Stack.Screen name="listaPeliculasScreen" component={ListaPeliculasScreen}></Stack.Screen>
        <Stack.Screen name="descripcionMovieScreen" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="playMovieScreen" component={PlayMovieScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };