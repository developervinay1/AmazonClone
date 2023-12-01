import { View, Text, Image } from "react-native";
import React from "react";

export default function BrandsSection() {
  const brandsData = [
    {
      id: 1,
      title: "Min. 20% Off | CaratLane Diamond Necklace",
      image: require("../assets/brand1.jpeg"),
    },
    {
      id: 2,
      title: "Min. 40% Off | Fossil, Titan, Smart Watches & More",
      image: require("../assets/brand2.jpeg"),
    },
    {
      id: 1,
      title: "Heels - Upto 50% Off on Heeled Sandles, High Heels",
      image: require("../assets/brand3.jpeg"),
    },
    {
      id: 1,
      title: "Sony 60W Bluetooth Soundbar Speaker Audio Engine",
      image: require("../assets/brand4.jpeg"),
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "bold" }}>
        Brands Of The Day
      </Text>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {brandsData.map((data, index) => {
          return (
            <View key={index} style={{ width: "48%" }}>
              <Image
                source={data.image}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
              <Text style={{ marginTop: 5, fontWeight: "600" }}>
                {data.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
