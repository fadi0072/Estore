import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputText = ({
  onChangeText,
  value,
  style,
  label,
  star,
  placeholder,
  secureTextEntry,
  defaultValue,
  maxLength,
  keyboardType
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {label && <Text style={styles.label}>{label}</Text>}
        {star && <Text style={styles.star}>{star}</Text>}
      </View>
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#fff",
    marginTop: "5%",
  },
  input: {
    borderColor: "#E4E9F3",
    height: 45,
    marginTop: 10,
    borderWidth: 1.0,
    padding: 10,
    borderRadius: 3,
  },
  label: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
  star: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    left: 2,
    color: '#FF0000'
  },
});
