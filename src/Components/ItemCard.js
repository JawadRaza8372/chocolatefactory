import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
const ItemCard = ({ data, onClickF }) => {
  // CANNOT_RECOMMEND;
  // RECOMMENDED;
  // MIXED;
  // "name": "10 degrees chocolate",
  //     "notes": null,
  //     "status": "CANNOT_RECOMMEND",
  //     "status_reason": "CANNOT_RECOMMEND_DID_NOT_RESPOND",
  //     "status_url": null,
  //     "description": null,
  //     "logo_url": "https://media.graphcms.com/rU4nCRuQbyXAYQoMqo07",
  //     "logo_url_retina": "https://media.graphcms.com/rU4nCRuQbyXAYQoMqo07"
  const { name, status, logo_url } = data;
  const statusBg =
    status === "RECOMMENDED"
      ? "green"
      : status === "CANNOT_RECOMMEND"
      ? "red"
      : status === "MIXED"
      ? "gold"
      : "black";
  const onPressfun = () => {
    onClickF(data);
  };
  return (
    <>
      <TouchableOpacity onPress={onPressfun} style={styles.maindiv}>
        <View style={styles.imgAvtar}>
          <Image
            source={{
              uri: logo_url,
            }}
            style={styles.imgShow}
          />
        </View>
        <View style={styles.txtCont}>
          <Text>{name}</Text>

          <View style={{ ...styles.status, backgroundColor: statusBg }}>
            <Text style={styles.statusTxt}>{status}</Text>
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
    fontSize: h("1.8%"),
    fontWeight: "bold",
    color: screenbg,
  },
  imgShow: {
    width: "85%",
    height: "85%",
    resizeMode: "contain",
    borderRadius: h("1%"),
  },
});
