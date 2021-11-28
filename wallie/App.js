import React from "react";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Tabs from "./navigation/tabs";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Balance from "./screens/Balance";
import MoneyHistory from "./screens/MoneyHistory";
import Games from "./screens/Games";
import Transfer from "./screens/Transfer";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "MSans-ExtraBold": require("./assets/fonts/MerriweatherSans-ExtraBold.ttf"),
    "MSans-Black": require("./assets/fonts/MerriweatherSans-Bold.ttf"),
    "MSans-Bold": require("./assets/fonts/MerriweatherSans-Medium.ttf"),
    "MSans-Regular": require("./assets/fonts/MerriweatherSans-Regular.ttf"),
    "MSans-Light": require("./assets/fonts/MerriweatherSans-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="MoneyHistory" component={MoneyHistory} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Transfer" component={Transfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
