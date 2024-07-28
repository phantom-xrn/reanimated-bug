import "expo-dev-client";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "./example";

SplashScreen.preventAutoHideAsync();

const TabStack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        onReady={async () => {
          await SplashScreen.hideAsync();
        }}
      >
        <TabStack.Navigator>
          <TabStack.Screen
            name="Example Screen"
            component={ExampleScreen}
            options={{ headerShown: false, presentation: "card" }}
            initialParams={{}}
          />
        </TabStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
