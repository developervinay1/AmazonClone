import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { themeColor } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = () => {
    console.log(username, email, password);
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Create an Account
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          paddingHorizontal: 10,
          gap: 10,
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: themeColor.lightGray,
          borderColor: themeColor.lightGray,
        }}
      >
        <UserIcon color={"black"} />
        <TextInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          paddingHorizontal: 10,
          gap: 10,
          borderRadius: 10,
          marginTop: 20,
          backgroundColor: themeColor.lightGray,
          borderColor: themeColor.lightGray,
        }}
      >
        <EnvelopeIcon color={"black"} />
        <TextInput
          placeholder="Enter Your Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          paddingHorizontal: 10,
          gap: 10,
          borderRadius: 10,
          marginTop: 20,
          backgroundColor: themeColor.lightGray,
          borderColor: themeColor.lightGray,
        }}
      >
        <KeyIcon color={"black"} />
        <TextInput
          secureTextEntry
          placeholder="Enter Your Password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={loginUser}
        style={{
          marginVertical: 40,
          marginHorizontal: 20,
          backgroundColor: themeColor.primaryColor,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Register
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={{ fontWeight: "bold" }}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
