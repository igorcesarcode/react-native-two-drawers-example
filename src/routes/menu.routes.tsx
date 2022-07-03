import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MenuContent from "../components/MenuContent";
import CartNavigation from "./cart.routes";

const DrawerMenu = createDrawerNavigator();

const MenuNavigation: React.FC = () => {
  return (
    <DrawerMenu.Navigator
      id="DrawerMenu"
      drawerContent={() => <MenuContent />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        drawerStyle: {
          backgroundColor: "#212529",
        },
      }}
    >
      <DrawerMenu.Screen
        name="CardDrawer"
        component={CartNavigation}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
          drawerIcon: () => null,
        }}
      />
    </DrawerMenu.Navigator>
  );
};

export default MenuNavigation;
