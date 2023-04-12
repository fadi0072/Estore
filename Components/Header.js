import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
export default function Header() {
  return (
    <View>
      <ImageBackground
        source={require("../assets/headerImg.png")}
        resizeMode="stretch"
        style={styles.imageBG}
      >
        <View style={styles.image}>
          <Image
            source={require("../assets/Logo.png")}
            style={{ width: 233.68, height: 42.36 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  imageBG: {
    width: "100%",
    height: 157,
    justifyContent: "center",
  },
});
