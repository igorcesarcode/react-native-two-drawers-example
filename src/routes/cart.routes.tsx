import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CartContent from "../components/CartContent";
import StackNavigation from "./stack.routes";

const DrawerCart = createDrawerNavigator();

const CartNavigation: React.FC = () => {
  return (
    <DrawerCart.Navigator
      id="DrawerCart"
      drawerContent={() => <CartContent />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#212529",
          paddingTop: 60,
        },
      }}
    >
      <DrawerCart.Screen
        name="HomeDrawer"
        component={StackNavigation}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
          drawerIcon: () => null,
        }}
      />
    </DrawerCart.Navigator>
  );
};

export default CartNavigation;
