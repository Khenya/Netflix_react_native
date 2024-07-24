import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../screens/SearchScreen";
import ListaPeliculasScreen from "../screens/ListaPeliculasScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";

const Stack = createStackNavigator();

export const SearchStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="1" component={SearchScreen}></Stack.Screen>
        <Stack.Screen name="2" component={ListaPeliculasScreen}></Stack.Screen>
        <Stack.Screen name="3" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="4" component={PlayMovieScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };