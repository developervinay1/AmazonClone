import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function BillsSection() {
  const services = [
    {
      id: 1,
      title: "LED Light Strips",
      image: require("../assets/service1.jpeg"),
    },
    {
      id: 2,
      title: "Mobile Phones",
      image: require("../assets/service2.jpeg"),
    },
    {
      id: 3,
      title: "Samsung Galaxy S23",
      image: require("../assets/service3.jpeg"),
    },
    {
      id: 4,
      title: "100x Zoom Phone",
      image: require("../assets/service4.jpeg"),
    },
    {
      id: 5,
      title: "Makhana Tomato Flavour",
      image: require("../assets/service6.jpeg"),
    },
    {
      id: 6,
      title: "Wahing Machines",
      image: require("../assets/service7.jpeg"),
    },
  ];

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -40, marginLeft: 20 }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* Pay Later & Other Options */}
          <View
            style={{
              padding: 10,
              backgroundColor: "white",
              width: 180,
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 10,
              gap: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                  source={require(".././assets/amazon-pay.png")}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: 50,
                  }}
                />
                <Text style={{ fontSize: 12 }}>Amazon Pay</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                  source={require(".././assets/send-money.jpg")}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: 50,
                  }}
                />
                <Text style={{ fontSize: 12 }}>Send Money</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                  source={require(".././assets/pay-bills.jpeg")}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: 50,
                  }}
                />
                <Text style={{ fontSize: 12 }}>Pay Bills</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                  source={require(".././assets/scan-qr.jpeg")}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: 50,
                  }}
                />
                <Text style={{ fontSize: 12 }}>Scan QR</Text>
              </View>
            </View>
          </View>
          {/* Services Section */}
          {services.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  width: 160,
                  alignItems: "center",
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  gap: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}
              >
                <Image
                  source={data.image}
                  style={{ width: "100%", borderRadius: 10, height: 100 }}
                />
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  Keep Shopping for {data.title}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
