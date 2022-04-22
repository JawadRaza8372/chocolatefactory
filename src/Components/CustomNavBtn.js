import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
const CustomNavBtn = ({ data, activeVal }) => {
  return (
    <View style={styles.btmnav}>
      {data &&
        data.map((dat, index) => (
          <TouchableOpacity
            onPress={dat.onpressfun}
            key={index}
            style={
              activeVal === dat.title
                ? [styles.btns, styles.active]
                : styles.btns
            }
          >
            <Text style={styles.btntxt}>{dat.title}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default CustomNavBtn;

const styles = StyleSheet.create({
  btmnav: {
    width: "100%",
    height: h("7%"),
    backgroundColor: mainColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  btns: {
    width: w("19%"),
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  active: {
    backgroundColor: "brown",
  },
  btntxt: {
    fontSize: h("2.4%"),
    color: screenbg,
    fontWeight: "bold",
  },
});
