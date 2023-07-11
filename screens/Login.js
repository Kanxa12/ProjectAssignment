import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Title from "../components/Title";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Send the email and password to the server for authentication.
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Title heading="Login" />
      <Title subtitle="Please sign in to continue." />
      <View style={styles.SectionStyle}>
        <Ionicon name="mail" size={20} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.SectionStylePassword}>
        <Ionicon name="keypad" size={20} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.forgotText}>FORGOT</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTextStyle}>
            LOGIN <Ionicon name="arrow-forward" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        {" "}
        Don't have an account? <Text style={styles.signupText}>Sign up</Text>
      </Text>
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
    fontSize: 40,
    fontWeight: "bold",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 40,
    marginLeft: 35,
    marginRight: 35,
    borderBottomWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  SectionStylePassword: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    borderBottomWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0,
    borderRadius: 10,
  },
  bottomText: {
    color: "black",
    fontSize: 18,
    position: "absolute",
    bottom: 50,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 80,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    alignItems: "center",
  },
  forgotText: {
    color: "#000",
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 800,
  },
  signupText: {
    color: "darkorange",
  },
});

export default LoginPage;
