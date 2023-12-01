import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";

export default function Slider() {
  const sliderData = [
    {
      image: require("../assets/slider1.jpeg"),
    },
    {
      image: require("../assets/slider2.jpeg"),
    },
    {
      image: require("../assets/slider3.jpeg"),
    },
    {
      image: require("../assets/slider4.jpeg"),
    },
    {
      image: require("../assets/slider5.jpeg"),
    },
    {
      image: require("../assets/slider6.png"),
    },
    {
      image: require("../assets/slider7.jpeg"),
    },
    {
      image: require("../assets/slider8.jpeg"),
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sliderData.map((data, index) => {
          return (
            <Image
              source={data.image}
              style={{
                width: Dimensions.get("window").width - 50,
                height: 180,
                objectFit: "cover",
                marginHorizontal: 10,
                borderRadius: 10,
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
