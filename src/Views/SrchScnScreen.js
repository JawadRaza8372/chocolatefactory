import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomNavBtn from "../Components/CustomNavBtn";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import ScanComp from "../Components/ScanComp";
import SearchComp from "../Components/SearchComp";
import { NavigationContainer } from "@react-navigation/native";
const SrchScnScreen = ({ navigation }) => {
  const [selected, setselected] = useState("Search");
  const data = [
    {
      title: "  List",
      onpressfun: () => {
        navigation.goBack();
      },
    },
    {
      title: "Search",
      onpressfun: () => {
        setselected("Search");
      },
    },
    {
      title: "Scan",
      onpressfun: () => {
        setselected("Scan");
      },
    },
  ];
  return (
    <SafeAreaView style={styles.bgdiv}>
      {selected === "Scan" ? (
        <ScreenHeader
          title={"Scan BarCode"}
          onPressFun={() => navigation.goBack()}
        />
      ) : (
        <ScreenHeader onPressFun={() => navigation.goBack()}>
          <TextInput placeholder="searh" style={styles.srchinp} />
        </ScreenHeader>
      )}
      <View
        style={{
          width: "98%",
          flex: 1,
          marginVertical: 2,
          alignSelf: "center",
        }}
      >
        {selected === "Scan" ? (
          <ScanComp />
        ) : selected === "Search" ? (
          <SearchComp />
        ) : null}
      </View>
      <CustomNavBtn data={data} activeVal={selected} />
    </SafeAreaView>
  );
};

export default SrchScnScreen;

const styles = StyleSheet.create({
  bgdiv: {
    width: "100%",
    height: "100%",
    backgroundColor: screenbg,
  },
  srchinp: {
    width: "97%",
    height: "70%",
    backgroundColor: "lightgrey",
    alignSelf: "center",
    borderRadius: h("5%"),
    paddingHorizontal: h("2%"),
  },
});
