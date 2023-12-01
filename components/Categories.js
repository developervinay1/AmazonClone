import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Fresh from "../assets/fresh.jpeg";
import Deals from "../assets/deals.png";
import Beauty from "../assets/beauty.png";
import Mobiles from "../assets/mobiles.jpeg";
import MiniTV from "../assets/minitv.jpeg";
import Fashion from "../assets/fashion.png";
import Prime from "../assets/prime.jpeg";
import Electronics from "../assets/electronics.jpeg";
import Home from "../assets/home.jpeg";
import Travel from "../assets/travel.jpeg";
import Furniture from "../assets/furniture.png";
import Pharmacy from "../assets/pharmacy.jpeg";
import Movies from "../assets/movies.png";
import Books from "../assets/books.jpeg";
import HomeAppliances from "../assets/home-appliances.png";
import More from "../assets/more.png";

export default function Categories() {
  const CategoriesData = [
    {
      id: 1,
      image: Fresh,
      title: "Fresh",
    },
    {
      id: 2,
      image: Deals,
      title: "Deals",
    },
    {
      id: 3,
      image: Beauty,
      title: "Beauty",
    },
    {
      id: 4,
      image: Mobiles,
      title: "Mobiles",
    },
    {
      id: 5,
      image: MiniTV,
      title: "miniTV",
    },
    {
      id: 6,
      image: Fashion,
      title: "Fashion",
    },
    {
      id: 7,
      image: Prime,
      title: "Prime",
    },
    {
      id: 8,
      image: Electronics,
      title: "Electronics",
    },
    {
      id: 9,
      image: Home,
      title: "Home",
    },
    {
      id: 10,
      image: Travel,
      title: "Travel",
    },
    {
      id: 11,
      image: Furniture,
      title: "Furniture",
    },
    {
      id: 12,
      image: Pharmacy,
      title: "Pharmacy",
    },
    {
      id: 13,
      image: Movies,
      title: "Movies",
    },
    {
      id: 14,
      image: Books,
      title: "Books, Toys",
    },
    {
      id: 15,
      image: HomeAppliances,
      title: "Appliances",
    },
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {CategoriesData.map((data, index) => {
            return (
              <View
                key={index}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                  source={data.image}
                />
                <Text
                  style={{
                    textTransform: "capitalize",
                    marginTop: 5,
                    fontSize: 13,
                  }}
                >
                  {data.title}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
