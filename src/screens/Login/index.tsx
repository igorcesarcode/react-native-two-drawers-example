import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { userStore } from "../../Store/userStore";

const request = {
  token: "vgafgwhjkvdskhvjkds",
  name: "Igor",
  email: "igorcesarbernades@gmail.com",
};

const Login: React.FC = ({ navigation }: any) => {
  const { setUser } = userStore();
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          setUser(request);
          navigation.replace("Root");
        }}
        style={{ color: "white" }}
      >
        Logar
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
});
