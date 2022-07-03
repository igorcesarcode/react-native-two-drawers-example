import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterComponent from "../../components/RegisterComponent";
import { userStore } from "../../Store/userStore";

const Home: React.FC = ({ navigation }: any) => {
  const { user } = userStore();
  return (
    <>
      <View style={styles.container}>
        {user ? (
          <Text style={{ color: "white" }}>Usuario logado</Text>
        ) : (
          <Text style={{ color: "white" }}>Usuario não esta logado</Text>
        )}
        <Text
          onPress={() => {
            navigation.navigate("Teste");
          }}
          style={{ color: "white" }}
        >
          App Carrinho teste
        </Text>
      </View>
      {!user?.token && <RegisterComponent />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
});
