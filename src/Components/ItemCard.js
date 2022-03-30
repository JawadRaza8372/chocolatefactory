import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
const ItemCard = ({ status, onClickF }) => {
  status = "R";
  const statusBg =
    status === "R"
      ? "green"
      : status === "NR"
      ? "red"
      : status === "M"
      ? "yellow"
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
    <>
      <TouchableOpacity onPress={onClickF} style={styles.maindiv}>
        <View style={styles.imgAvtar}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.imgShow}
          />
        </View>
        <View style={styles.txtCont}>
          <Text>ItemCard</Text>

          <View style={{ ...styles.status, backgroundColor: statusBg }}>
            <Text style={styles.statusTxt}>{statustxt}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  maindiv: {
    width: "95%",
    height: h("13%"),
    alignSelf: "center",
    borderRadius: h("1%"),
    overflow: "hidden",
    backgroundColor: screenbg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: h("1%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgAvtar: {
    width: w("25%"),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  txtCont: {
    width: "73%",
    height: "100%",
    paddingLeft: w("4%"),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  status: {
    height: h("4%"),
    backgroundColor: "brown",
    borderRadius: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  statusTxt: {
    fontSize: h("2.2%"),
    fontWeight: "bold",
    color: screenbg,
  },
  imgShow: {
    width: "85%",
    height: "85%",
    resizeMode: "cover",
    borderRadius: h("1%"),
  },
});
