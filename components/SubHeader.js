import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function SubHeader() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#bdeee9",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
          <Ionicons name="location-outline" size={18} color="black" />
          <Text style={{ fontSize: 12, fontWeight: 500 }}>
            Deliver To Sarhali - Tarn Taran 143408
          </Text>
          <Entypo name="chevron-small-down" size={18} color="black" />
        </View>
      </View>
    </View>
  );
}
