import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
const CustomButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={styles.customBtn} onPress={onClick}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customBtn: {
    width: w("45%"),
    height: h("6%"),
    alignSelf: "center",
    backgroundColor: mainColor,
    borderRadius: h("6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: h("2.5%"),
    fontWeight: "bold",
    letterSpacing: 1,
    color: screenbg,
  },
});
