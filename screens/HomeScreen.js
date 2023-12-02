import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Services from "../components/Services";
import DealSection from "../components/DealSection";
import BrandsSection from "../components/BrandsSection";
import ProductsSection from "../components/ProductsSection";
import PS2 from "../components/PS2";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SubHeader />
        <Categories />
        <Slider />
        <Services />
        <DealSection
          title={"Recommended Deals For You"}
          imageURL={require("../assets/recommend.jpg")}
          salePercentage={20}
          originalPrice={"2,000"}
          salePrice={"1,700"}
          productName={
            "Nykaa Face Wash Gentle Skin Cleanser For All Types Of Skin"
          }
          objectFit={"cover"}
        />
        <BrandsSection />
        <ProductsSection />
        <PS2 />

        <DealSection
          productName={
            "beatXP Flare Pro 1.39” HD Display Bluetooth Calling Smart Watch"
          }
          title={"Smart Watch Deals"}
          imageURL={require("../assets/prod10.png")}
          salePercentage={18}
          salePrice={"1,800"}
          originalPrice={"2,599"}
          objectFit={"contain"}
        />
        <PS2 />
      </ScrollView>
    </SafeAreaView>
  );
}
