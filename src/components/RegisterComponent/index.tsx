import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RegisterComponent: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate("Register");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate("Login");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#4d5155",
    paddingVertical: 20,
  },
  button: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71f79f",
    borderRadius: 10,
  },
  buttonText: {
    paddingVertical: 10,
    color: "#4d5155",
    fontSize: 17,
    fontWeight: "bold",
  },
});
