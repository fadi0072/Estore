import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Header from "../../Components/Header";
import OwnStorage from "../../Api/StorageController";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import strings from "../../constants/lng/LocalizedStrings";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const COLORS = {
  primary: "#282534",
  black: "black",
  gold: "#FFE713",
  green: "#51AB1D",
};

const slides = [
  {
    id: "1",

    image: require("../../assets/onBoard1.png"),
    title: "CLEAN & RECYCLE",
    subtitle: "Clean your area & separate the recyclable waste.",
  },
  {
    id: "2",
    image: require("../../assets/onBoard2.png"),
    title: "REQUEST SHOREX",
    subtitle: "Use the recycle feature in the app to make a recycle request.",
  },
  {
    id: "3",
    image: require("../../assets/onBoard3.png"),
    title: "DELIVER & GAIN",
    subtitle:
      "Deliver the recyclable waste to the driver to gain Eco-Rewards plant.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", flex: 1, marginTop: "8%" }}>
      <Image
        source={item.image}
        style={{ height: "73%", width: width, resizeMode: "contain" }}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = () => {
  const navigation = useNavigation();
  var localdata = new OwnStorage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let [fontLoad] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const onSkip = () => {
    localdata.setvalue("isSkip", "1");
    navigation.replace("Login");
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.19,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.green,
                  width: "8%",
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.innerSkip}>
          <TouchableOpacity onPress={onSkip}>
            <Text
              style={{
                padding: 20,
                fontSize: 18,
              }}
            >
              {strings.SKIP}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  if (!fontLoad) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        {/* <FlatList
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.95  }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            /> */}
        <AppIntroSlider
          data={slides}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showSkipButton={true}
          renderPagination={() => null}
          renderItem={({ item }) => <Slide item={item} />}
        />
        <View>
          <Footer />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 10,
    width: "8%",
    backgroundColor: COLORS.gold,
    marginHorizontal: 3,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  innerSkip: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
