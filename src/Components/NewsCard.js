import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
const NewsCard = ({ bgColor, onClickf }) => {
  return (
    <TouchableOpacity onPress={onClickf} style={styles.newsCard}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.imgshow}
      />
      <View
        style={[
          styles.textCont,
          { backgroundColor: bgColor ? bgColor : "rgba(0,0,0,0.6)" },
        ]}
      >
        <Text style={styles.headtxt}>Understanding the Chocolate List</Text>
        <Text style={styles.desc}>
          Food Empowerment Project (F.E.P.) publishes a list of companies that
          sell chocolates that we do and do not recommend.{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  newsCard: {
    width: w("93%"),
    height: h("18%"),
    alignSelf: "center",
    position: "relative",
    borderRadius: h("3%"),
    overflow: "hidden",
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
  },
  headtxt: {
    fontSize: h("2.4%"),
    fontWeight: "bold",
    color: screenbg,
  },
  desc: {
    fontSize: h("1.7%"),
    color: screenbg,
  },
});
