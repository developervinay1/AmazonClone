import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <TouchableOpacity onPress={() => signOut(auth)}>
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}
