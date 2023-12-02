import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { UserCircleIcon } from "react-native-heroicons/solid";

export default function ProfileHeader() {
  const user = auth.currentUser;
  const userName = user.email.split("@gmail.com");

  const buttonsData = [
    {
      id: 1,
      title: "Your Orders",
    },
    {
      id: 2,
      title: "Buy Again",
    },
    {
      id: 3,
      title: "Your Account",
    },
    {
      id: 4,
      title: "Your Lists",
    },
  ];

  return (
    <View showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}>
      {/* Profile User Info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 22, letterSpacing: 1.1 }}>
          Hello, <Text style={{ fontWeight: "bold" }}>{userName}</Text>
        </Text>
        <UserCircleIcon color={"#000"} size={44} />
      </View>
      {/* Buttons */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            flexWrap: "wrap",
          }}
        >
          {buttonsData.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: "#fafafa",
                  borderWidth: 1,
                  paddingHorizontal: 14,
                  paddingVertical: 18,
                  borderRadius: 50,
                  width: "48%",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  {data.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
