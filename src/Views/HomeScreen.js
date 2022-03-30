import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { screenbg } from "../AppColors";
import CustomNavBtn from "../Components/CustomNavBtn";
import { w, h } from "react-native-responsiveness";
import HeaderInfo from "../Components/HeaderInfo";
import NewsCard from "../Components/NewsCard";
import ItemCard from "../Components/ItemCard";
import { AntDesign } from "@expo/vector-icons";
import CustomModel from "../Components/CustomModel";
const HomeScreen = ({ navigation }) => {
  const [selected, setselected] = useState("All");
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const data = [
    {
      title: "All",
      onpressfun: () => {
        setselected("All");
        setshowModal(false);
      },
    },
    {
      title: "R",
      onpressfun: () => {
        setselected("R");
        setshowModal(false);
      },
    },
    {
      title: "NR",
      onpressfun: () => {
        setselected("NR");
        setshowModal(false);
      },
    },
    {
      title: "M",
      onpressfun: () => {
        setselected("M");
        setshowModal(false);
      },
    },
  ];
  const myDat = [
    { id: "hy1" },
    { id: "hy2" },
    { id: "hy3" },
    { id: "hy4" },
    { id: "hy5" },
    { id: "hy6" },
    { id: "hy7" },
    { id: "hy8" },
    { id: "hy9" },
    { id: "hy10" },
    { id: "hy11" },
    { id: "hy12" },
    { id: "hy13" },
    { id: "hy14" },
  ];
  return (
    <>
      <SafeAreaView style={styles.bgdiv}>
        <ScreenHeader
          isMenuButton
          title={"All Companies"}
          onPressFun={() => navigation.toggleDrawer()}
          scanbtn
          onPressFunScan={() => navigation.navigate("SrchScnScreen")}
        />
        <View
          style={{
            width: "98%",
            flex: 1,
            marginVertical: 2,
            alignSelf: "center",
          }}
        >
          <ScrollView>
            <TextInput placeholder="search" style={styles.searchinp} />
            <HeaderInfo>
              <View style={styles.seeall}>
                <Text>See All</Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </HeaderInfo>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ height: "100%" }}
            >
              <NewsCard onClickf={() => navigation.navigate("newsDesc")} />
              <NewsCard onClickf={() => navigation.navigate("newsDesc")} />
              <NewsCard onClickf={() => navigation.navigate("newsDesc")} />
              <NewsCard onClickf={() => navigation.navigate("newsDesc")} />
            </ScrollView>
            <HeaderInfo>
              <TouchableOpacity onPress={toggleModal} style={styles.flters}>
                <View style={styles.minibtn}>
                  <Text>Filters</Text>
                  <AntDesign name="right" size={24} color="black" />
                </View>
                <View style={styles.selecteddiv}>
                  <Text style={styles.statsTxt}>
                    {selected === "All"
                      ? "All"
                      : selected === "R"
                      ? "Recomanded"
                      : selected === "NR"
                      ? "Not Recomanded"
                      : selected === "M"
                      ? "Mixed"
                      : "UnKnown"}
                  </Text>
                </View>
              </TouchableOpacity>
            </HeaderInfo>
            {myDat.map((item, index) => (
              <ItemCard
                key={index}
                onClickF={() => navigation.navigate("chocoItemDesc")}
              />
            ))}
          </ScrollView>
        </View>
        <CustomNavBtn data={data} activeVal={selected} />
      </SafeAreaView>
      <CustomModel show={showModal} toggleModal={toggleModal}>
        <View style={styles.bgModal}>
          <View style={styles.menu}>
            <View style={styles.hedtxt}>
              <Text style={styles.headtxt}>Filter</Text>
            </View>
            {data.map((dat, index) => (
              <TouchableOpacity
                onPress={dat.onpressfun}
                style={styles.opttxt}
                key={index}
              >
                <Text style={styles.desctext}>
                  {dat.title === "All"
                    ? "All"
                    : dat.title === "R"
                    ? "Recomanded"
                    : dat.title === "NR"
                    ? "Not Recomanded"
                    : dat.title === "M"
                    ? "Mixed"
                    : ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </CustomModel>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgdiv: {
    width: "100%",
    height: "100%",
    backgroundColor: screenbg,
  },
  searchinp: {
    width: w("70%"),
    height: h("5%"),
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginVertical: h("1%"),
    borderRadius: h("5%"),
    paddingHorizontal: h("2%"),
  },
  seeall: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  flters: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  minibtn: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  selecteddiv: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: w("2.3%"),
  },
  statsTxt: {
    fontSize: h("2.1%"),
  },
  bgModal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    width: "90%",
    height: "40%",
    backgroundColor: screenbg,
    borderRadius: h("2%"),
    overflow: "hidden",
  },
  hedtxt: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  opttxt: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: w("4%"),
  },
  headtxt: {
    fontSize: h("4%"),
    fontWeight: "bold",
  },
  desctext: {
    fontSize: h("3.2%"),
  },
});
