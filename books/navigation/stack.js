import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useStateContext } from "../context/StateContext";
import Tabs from "./tabs";
import BookDetail from "../screens/BookDetail";
import Welcome from "../screens/Welcome";
import Form from "../screens/Form";
import ContactInfo from "../screens/ContactInfo";
import PaymentMethod from "../screens/PaymentMethod";
import PaymentInfo from "../screens/PaymentInfo";
import PaymentSuccess from "../screens/PaymentSuccess";

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();


// const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Welcome"}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Tabs"}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen

        name="BookDetail"
        component={BookDetail}
        sharedElements={(route, otherRoute, showing) => {
            const { id } = route.params;
            return [
              {
                id: `item.${id}.photo`,
                animation: 'move',
                resize: 'clip',
                align: 'center'
              },
            ];
            return [`item.${id}.photo`];
          }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const { logged } = useStateContext();
  if (logged) {
    return <HomeNavigator />;
  } else {
    return <AuthNavigator />;
  }
};
