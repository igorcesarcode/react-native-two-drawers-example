import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MenuNavigation from "./menu.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MenuNavigation />
    </NavigationContainer>
  );
};

export default Routes;
