import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function ProductsSection() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const api = await fetch("https://fakestoreapi.com/products?limit=9");
        const data = await api.json();
        setProducts(data);
      } catch (error) {
        console.log("Error");
      }
    };

    getAllProducts();
  }, []);

  return (
    <View
      style={{ borderTopWidth: 2, paddingTop: 20, borderTopColor: "lightgray" }}
    >
      {products ? (
        <View>
          <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "bold" }}>
            Upto 30% Off | Top Picks
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
            {products.map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: "25%",
                  }}
                >
                  <Image
                    source={{ uri: data.image }}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "contain",
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={{ alignItems: "center", padding: 20 }}>
          <ActivityIndicator color={"#88dae0"} />
        </View>
      )}
    </View>
  );
}
