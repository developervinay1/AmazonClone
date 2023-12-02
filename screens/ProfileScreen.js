import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ProfileHeader from "../components/ProfileHeader";

export default function ProfileScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <SubHeader />
      <ProfileHeader />
    </View>
  );
}
