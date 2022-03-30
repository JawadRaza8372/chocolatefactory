import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { FontAwesome } from "@expo/vector-icons";
import { screenbg } from "../AppColors";

const SharetoLink = ({ content }) => {
  return (
    <View style={styles.sharelinkdiv}>
      <View
        style={{
          ...styles.avtardiv,
          backgroundColor:
            content === "1"
              ? "lightgrey"
              : content === "2"
              ? "#00acee"
              : content === "3"
              ? "#4267B2"
              : "transparent",
        }}
      >
        {content === "1" ? (
          <FontAwesome name="heart" size={h("4.2%")} color={screenbg} />
        ) : content === "2" ? (
          <FontAwesome name="twitter" size={h("4.3%")} color={screenbg} />
        ) : content === "3" ? (
          <FontAwesome name="facebook" size={h("4.3%")} color={screenbg} />
        ) : null}
      </View>
      <View style={styles.txtCont}>
        <Text style={styles.titletxt}>
          {content === "1"
            ? "Add as favrote"
            : content === "2"
            ? "Share on twitter"
            : content === "3"
            ? "share on facebook"
            : ""}
        </Text>
      </View>
    </View>
  );
};

export default SharetoLink;

const styles = StyleSheet.create({
  sharelinkdiv: {
    width: "80%",
    height: h("7%"),
    alignSelf: "center",
    marginBottom: h("3%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  avtardiv: {
    width: w("15%"),
    height: w("15%"),
    borderRadius: w("18%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  txtCont: {
    width: "73%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: w("4%"),
  },
  titletxt: {
    fontSize: h("2.2%"),
  },
});
