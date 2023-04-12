import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import GlobalStyles from "../utils/GlobalStyles";

const Button = ({ onPress, style, label, disabled, showloaderM }) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.loginBtn, style]}
      >
        <View style={[GlobalStyles.FlexDirectionRow]}>
          {showloaderM &&
            <ActivityIndicator
              size="small"
              color="white"
              style={[GlobalStyles.activityIndicator]}
            ></ActivityIndicator>}
          {label && <Text style={styles.loginText}>{label}</Text>}

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: 286,
    alignContent: "center",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#51AB1D",
    paddingRight: 15,
  },
  loginText: {
    fontSize: 17,
    color: "white",
    fontFamily: 'Poppins_500Medium'
  },
});
