import { createStackNavigator } from "@react-navigation/stack";


import ListaPeliculasScreen from "../screens/ListaPeliculasScreen";
import DescripcionMovieScreen from "../screens/DescripcionMovieScreen";
import PlayMovieScreen from "../screens/PlayMovieScreen";

const Stack = createStackNavigator();

export const SearchStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="1" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="1" component={ListaPeliculasScreen}></Stack.Screen>
        <Stack.Screen name="2" component={DescripcionMovieScreen}></Stack.Screen>
        <Stack.Screen name="3" component={PlayMovieScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };