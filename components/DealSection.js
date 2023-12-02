import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function DealSection({
  title,
  imageURL,
  salePercentage,
  salePrice,
  originalPrice,
  productName,
  objectFit,
}) {
  return (
    <View
      style={{
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: "lightgray",
        paddingBottom: 10,
      }}
    >
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
      <Image
        source={imageURL}
        style={{
          width: "100%",
          height: 250,
          objectFit: objectFit,
          marginTop: 15,
        }}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#be0201",
            color: "white",
            fontWeight: "bold",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginLeft: 10,
          }}
        >
          {salePercentage}% Off
        </Text>
        <Text style={{ color: "#be0201", fontWeight: "bold" }}>Deal</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹{salePrice}</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              textDecorationLine: "line-through",
            }}
          >
            M.R.P
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              textDecorationLine: "line-through",
            }}
          >
            ₹{originalPrice}
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 10, gap: 5, marginVertical: 5 }}>
        <Text>{productName}</Text>
        <TouchableOpacity>
          <Text style={{ color: "#01717b", fontWeight: "bold" }}>
            See All Deals
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
