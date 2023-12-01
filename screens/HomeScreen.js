import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <SubHeader />
      <Categories />
    </SafeAreaView>
  );
}
