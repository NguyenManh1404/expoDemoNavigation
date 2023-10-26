import React from "react";

import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "./components/ChatDetails";
import Chat from "./components/Chat";
import BottomTab from "./navigation/BottomTab";
import CallScreen from "./screens/CallScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CallScreen"
          component={CallScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
