import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ProfileHeader from "../components/ProfileHeader";
import PS2 from "../components/PS2";

export default function ProfileScreen() {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <SubHeader />
      <ProfileHeader />
      <PS2 />
    </ScrollView>
  );
}
