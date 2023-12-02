import { View, Text, Image } from "react-native";
import React from "react";

export default function PS2() {
  const productImages = [
    {
      id: 1,
      image: require("../assets/prod1.png"),
    },
    {
      id: 2,
      image: require("../assets/prod2.png"),
    },
    {
      id: 3,
      image: require("../assets/prod3.png"),
    },
    {
      id: 4,
      image: require("../assets/prod4.png"),
    },
    {
      id: 5,
      image: require("../assets/prod5.png"),
    },
    {
      id: 6,
      image: require("../assets/prod6.png"),
    },
    {
      id: 7,
      image: require("../assets/prod7.png"),
    },
    {
      id: 8,
      image: require("../assets/prod8.png"),
    },
    {
      id: 9,
      image: require("../assets/prod9.png"),
    },
  ];

  return (
    <View
      style={{ borderTopWidth: 2, paddingTop: 20, borderTopColor: "lightgray" }}
    >
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "bold" }}>
        Deals for you
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          paddingVertical: 20,
          justifyContent: "center",
        }}
      >
        {productImages.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#fafafa",
                width: "30%",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={data.image}
                style={{ width: "100%", height: 100, objectFit: "contain" }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
