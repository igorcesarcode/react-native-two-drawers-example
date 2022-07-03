import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import CustomHeader from "../components/CustomHeader";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Teste from "../screens/Teste";
import BottomTab from "./tab.routes";

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="Root"
            component={BottomTab}
            options={{
              header: () => <CustomHeader />,
            }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000814",
            },
            headerTintColor: "#32cbff",
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="Teste" component={Teste} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
