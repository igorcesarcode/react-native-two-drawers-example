import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CartContent: React.FC = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <View
        style={{
          width: "100%",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>Meu Carinho</Text>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigation.goBack();
          }}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <DrawerItem
        label={() => <Text style={{ color: "white" }}>Teste</Text>}
        onPress={() => alert("Teste")}
      />
    </DrawerContentScrollView>
  );
};

export default CartContent;
