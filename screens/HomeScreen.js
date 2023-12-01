import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Services from "../components/Services";
import DealSection from "../components/DealSection";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SubHeader />
        <Categories />
        <Slider />
        <Services />
        <DealSection />
      </ScrollView>
    </SafeAreaView>
  );
}
