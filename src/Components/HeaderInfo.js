import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const HeaderInfo = ({ children }) => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.txtCont}>
        <Text style={styles.hding}>HeaderInfo</Text>
        <Text style={styles.desc}>HeaderInfo</Text>
      </View>
      <View style={styles.btnCont}>{children}</View>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  mainDiv: {
    width: "95%",
    height: h("10%"),
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
    fontWeight: "bold",
  },
  desc: {
    fontSize: h("2%"),
    color: "grey",
  },
});
