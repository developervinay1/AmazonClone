import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#88dae0",
          paddingTop: StatusBar.currentHeight + 8,
          paddingHorizontal: 10,
          paddingBottom: StatusBar.currentHeight - 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
              borderRadius: 5,
              paddingHorizontal: 15,
              paddingVertical: 13,
              width: "90%",
              borderWidth: 1,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="search1" size={16} color="black" />
              <Text style={{ color: "gray" }}>Search Amazon.in</Text>
            </TouchableOpacity>

            <MaterialIcons name="qr-code-scanner" size={16} color="black" />
          </View>
          <View>
            <Feather name="mic" size={16} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
