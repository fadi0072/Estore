import { View, Text, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../Components/Button";

export default function AddScreen({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  useEffect(() => {
    console.log("data", data);
  });
  const renderPage = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: data.image }} style={{ height: 300 }}>
          <TouchableOpacity
            style={{ top: "10%", padding: "5%" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../../assets/backIcon.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ padding: "5%" }}>
          <Text style={{ fontSize: 23, fontWeight: "bold", lineHeight: 23 }}>
            {data.price}
          </Text>
          <Text style={{ fontSize: 23, fontWeight: "bold", lineHeight: 35 }}>
            {data.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 35,
                color: "grey",
              }}
            >
              {data.location}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 35,
                color: "grey",
              }}
            >
              {data.date}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,

              lineHeight: 35,
              color: "black",
            }}
          >
            {data.description}
          </Text>
          <Button label={"Add To Cart"} style={{ top: 120 }} />
        </View>
      </View>
    );
  };
  return <View style={{ flex: 1 }}>{renderPage()}</View>;
}