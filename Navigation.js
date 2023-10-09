import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { HomeIcon as HomeSolid } from "react-native-heroicons/solid";
import { HomeIcon } from "react-native-heroicons/outline";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "black" }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeSolid color={"black"} />
              ) : (
                <HomeIcon color={"black"} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
