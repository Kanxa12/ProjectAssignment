import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Send the email and password to the server for authentication.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text> Please sign in to continue.</Text>
      <View style={styles.SectionStyle}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View></View>

      <Text style={styles.bottomText}> Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  input: {
    flex: 1,
    color: "darkorange",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: "#dadae8",
  },
  bottomText: {
    color: "black",
    fontSize: 18,
    position: "absolute",
    bottom: 50,
  },
});

export default LoginPage;
