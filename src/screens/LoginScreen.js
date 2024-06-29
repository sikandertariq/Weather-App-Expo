import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { FIREBASE_AUTH } from "../auth/FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginScreen({ route }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      // Navigate to HomeScreen upon successful login
      navigation.navigate("Home");
    } catch (error) {
      console.error("Failed to log in:", error.message);
      Alert.alert("Login Failed", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      // Navigate to HomeScreen upon successful login
      //navigation.navigate("Home");
    } catch (error) {
      console.error("Failed to Sign up", error.message);
      Alert.alert("Sign up failed", error.message);
    }
  };

  return (
    <View className="flex-1 justify-center align items-center">
      <ImageBackground
        source={require("../assets/images/weather.jpeg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView className="flex-1 justify-center items-center">
          <Text className="text-4xl font-serif font-bold mb-10">Login</Text>
          <TextInput
            // style={{
            //   width: 200,
            //   height: 40,
            //   borderWidth: 1,
            //   marginBottom: 10,
            //   padding: 10,
            // }}
            className="rounded-lg border-2 border-gray-300 p-2 m-2 w-60 h-10"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor={"white"}
          />
          <TextInput
            // style={{
            //   width: 200,
            //   height: 40,
            //   borderWidth: 1,
            //   marginBottom: 10,
            //   padding: 10,
            // }}
            className="rounded-lg border-2 border-gray-300 p-2 m-2 w-60 h-10"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={"white"}
          />
          <TouchableOpacity
            className="p-2 m-2  bg-blue-500 rounded-lg w-20 h-10 justify-center items-center"
            onPress={handleLogin}
          >
            <Text className=" ">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="p-2 m-2  bg-blue-500 rounded-lg w-auto h-10 justify-center items-center"
            onPress={handleSignUp}
          >
            <Text>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
