import { createStackNavigator } from "@react-navigation/stack";

import CommingSoonScreen from "../screens/CommingSoonScreen";


const Stack = createStackNavigator();

export const ComingSoonStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="1" component={CommingSoonScreen}></Stack.Screen>
        
      </Stack.Navigator>
    );
  };

