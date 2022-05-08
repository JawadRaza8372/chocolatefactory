import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const ItemCard = ({ data, onClickF, notcenter }) => {
  const styles = StyleSheet.create({
    maindiv: {
      width: "90%",
      height: h("13%"),
      alignSelf: "center",
      marginRight: notcenter ? "5%" : 0,
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
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
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
      marginRight: h("1%"),
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
    strikethrough: {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
    },
  });

  const { features } = useSelector((state) => state.project);
  const { name, status, logo_url, status_reason } = data;
  const linethrough =
    status_reason === "CANNOT_RECOMMEND_OTHER_ISSUES" ? true : false;
  const check = features && features?.filter((dat) => dat.name === name);
  const statustext =
    status === "CANNOT_RECOMMEND" ? "CANNOT RECOMMEND" : status;
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
          <Text style={linethrough ? styles.strikethrough : { color: "black" }}>
            {name}
          </Text>

          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <View style={{ ...styles.status, backgroundColor: statusBg }}>
              <Text style={styles.statusTxt}>{statustext}</Text>
            </View>
            {check.length > 0 && (
              <AntDesign name="heart" size={h("3%")} color="red" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ItemCard;
