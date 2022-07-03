import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Cadastrar</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
});
