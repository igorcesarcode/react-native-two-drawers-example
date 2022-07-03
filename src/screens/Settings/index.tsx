import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { userStore } from "../../Store/userStore";

const Settings: React.FC = ({ navigation }: any) => {
  const { user, reset } = userStore();

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Configuração</Text>
      <View style={styles.userCad}>
        {!user && (
          <Text style={styles.userCardText}>Usuario não esta logado</Text>
        )}
        <Text style={styles.userCardText}>Nome: {user?.name}</Text>
        <Text style={styles.userCardText}>Email: {user?.email}</Text>
        <Text style={styles.userCardText}>Token: {user?.token}</Text>
      </View>

      <View>
        <Text
          onPress={() => {
            reset();
            navigation.replace("Root");
          }}
          style={styles.userCardText}
        >
          Sair
        </Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  userCad: {
    padding: 10,
  },
  userCardText: {
    padding: 10,
    color: "white",
  },
});
