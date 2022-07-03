import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Teste: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Teste</Text>
    </View>
  );
};

export default Teste;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
});
