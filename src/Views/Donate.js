import ScreenHeader from "../Components/ScreenHeader";
import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
import CustomButton from "../Components/CustomButton";
import { sendclick } from "../Components/SendMailComp";
const Donate = ({ navigation }) => {
  const donationsAmount = [
    { title: "$10" },
    { title: "$50" },
    { title: "$100" },
    { title: "$250" },
    { title: "$500" },
    { title: "$1000" },
  ];
  const descp =
    "By recognizing and making informed food choices, we can prevent injustices against people, the envirement and animals.";
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ScreenHeader
        isMenuButton
        title={"Donate Us"}
        onPressFun={() => navigation.toggleDrawer()}
      />
      <ScrollView
        contentContainerStyle={{ width: "100%", paddingBottom: h("2.5%") }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1616911821230-b7ca42658b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.imgshow}
        />
        <Text style={styles.headingtxt}>
          Create a more just and sustainable food system
        </Text>
        <Text style={styles.desctxt}>{descp}</Text>
        <View style={styles.dispdont}>
          {donationsAmount.map((dat, index) => (
            <TouchableOpacity style={styles.dontView} key={index}>
              <Text style={styles.amoutntxt}>{dat.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton title={"Donate"} onClick={() => sendclick()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Donate;

const styles = StyleSheet.create({
  textCont: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: h("4%"),
  },
  heading: {
    fontSize: h("3.5%"),
    textTransform: "capitalize",
    textAlign: "center",
  },
  descripttxt: {
    fontSize: h("2.2%"),
    width: "80%",
    textAlign: "center",
  },
  transparentButton: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subheading: {
    color: "lightgrey",
    fontSize: h("2%"),
    textAlign: "center",
  },
  SkipButton: { color: "lightgrey", fontSize: h("2.5%") },
  bottomNav: {
    width: "95%",
    height: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  spalshImg: {
    width: w("70%"),
    height: h("23%"),
    resizeMode: "cover",
  },
  contentView: {
    width: "100%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavView: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navdotsCont: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgshow: {
    width: w("70%"),
    height: h("23%"),
    resizeMode: "cover",
    alignSelf: "center",
  },
  dispdont: {
    // width: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    // flexDirection: "row",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: h("2.5%"),
  },
  dontView: {
    width: "45%",
    height: h("9%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginBottom: h("1.5%"),
  },
  amoutntxt: {
    fontSize: h("3%"),
    color: mainColor,
    fontWeight: "bold",
  },
  headingtxt: {
    width: "80%",
    fontSize: h("3.5%"),
    alignSelf: "center",
    marginVertical: h("2%"),
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "center",
  },
  desctxt: {
    fontSize: h("2.2%"),
    width: "80%",
    alignSelf: "center",
    marginBottom: h("2%"),
    fontWeight: "600",
    textAlign: "center",
  },
});
