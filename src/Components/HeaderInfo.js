import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const HeaderInfo = ({ title, subtitle, children }) => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.txtCont}>
        <Text style={styles.hding}>{title}</Text>
        <Text style={styles.desc}>{subtitle}</Text>
      </View>
      <View style={styles.btnCont}>{children}</View>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  mainDiv: {
    width: "95%",
    height: h("9%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  txtCont: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  btnCont: {
    width: "40%",
    height: "100%",
  },
  hding: {
    fontSize: h("2.5%"),
    fontWeight: "900",
  },
  desc: {
    fontSize: h("1.7%"),
    color: "grey",
  },
});
