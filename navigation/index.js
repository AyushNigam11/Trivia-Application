import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Quiz from "../screens/quiz";
import Result from "../screens/result";
import React from "react";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Results"
        component={Result}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default MyStack;
