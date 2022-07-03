import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
const MenuContent: React.FC = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => <Text style={{ color: "white" }}>Menu Teste 1</Text>}
        onPress={() => alert("Label1")}
      />
      <DrawerItem
        label={() => <Text style={{ color: "white" }}>Menu Teste 2</Text>}
        onPress={() =>
          //@ts-ignore
          navigation.navigate("Teste")
        }
      />
    </DrawerContentScrollView>
  );
};

export default MenuContent;
