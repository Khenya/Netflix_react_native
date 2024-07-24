import { createStackNavigator } from "@react-navigation/stack";

import CommingSoonScreen from "../screens/CommingSoonScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export const ComingSoonStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="1" component={CommingSoonScreen}></Stack.Screen>
        <Stack.Screen name="2" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };

