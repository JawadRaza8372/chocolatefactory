import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import SharetoLink from "./SharetoLink";
const ScanComp = () => {
  const status = "NR";
  const statusBg =
    status === "R"
      ? "green"
      : status === "NR"
      ? "red"
      : status === "M"
      ? "gold"
      : "black";
  const statustxt =
    status === "R"
      ? "Recomanded"
      : status === "NR"
      ? "Not Recomanded"
      : status === "M"
      ? "Mixed"
      : "UnKnown";

  return (
    <View style={styles.scandiv}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <View style={styles.scanCom} />
        <Text style={styles.compName}>Company Name</Text>
        <View style={{ ...styles.status, backgroundColor: statusBg }}>
          <Text style={styles.statusTxt}>{statustxt}</Text>
        </View>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <SharetoLink content="1" />
        <SharetoLink content="2" />
        <SharetoLink content="3" />
      </ScrollView>
    </View>
  );
};

export default ScanComp;

const styles = StyleSheet.create({
  scandiv: {
    width: "100%",
    height: "100%",
  },
  scanCom: {
    width: "100%",
    height: h("45%"),
    backgroundColor: "black",
    marginBottom: h("2%"),
  },
  status: {
    height: h("4%"),
    width: "50%",
    backgroundColor: "brown",
    borderRadius: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    marginVertical: h("4%"),
  },
  statusTxt: {
    fontSize: h("2.2%"),
    fontWeight: "bold",
    color: screenbg,
  },
  desc: {
    fontSize: h("2.1%"),
    width: "90%",
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  compName: {
    fontSize: h("2.3%"),
    textAlign: "center",
    fontWeight: "bold",
  },
});
