import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import {
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { themeColor } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupUser = () => {
    if (username === "" || email === "" || password === "") {
      Alert.alert(
        "Error",
        "Invaild Details, Please fill all the details to continue.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            style: "default",
          },
        ],
        { cancelable: true }
      );
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          const userId = user.uid;

          setDoc(doc(db, "users", `${userId}`), {
            username: username,
            email: email,
            createdAt: serverTimestamp(),
          });

          navigation.replace("Login");
        })
        .catch((error) => {
          Alert.alert(
            "Error",
            error,
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Ok",
                style: "default",
              },
            ],
            { cancelable: true }
          );
        });
    }
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
        onPress={signupUser}
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
