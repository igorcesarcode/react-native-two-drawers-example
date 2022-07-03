import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { userStore } from "../Store/userStore";

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  const { user } = userStore();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00a5e0",
        tabBarInactiveTintColor: "#0466c8",
        tabBarStyle: {
          backgroundColor: "#000814",
          borderTopWidth: 0,
          display: user?.token ? "flex" : "none",
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
