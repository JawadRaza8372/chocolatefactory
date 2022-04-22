import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { mainColor, screenbg } from "../AppColors";
import CustomNavBtn from "../Components/CustomNavBtn";
import { w, h } from "react-native-responsiveness";
import HeaderInfo from "../Components/HeaderInfo";
import NewsCard from "../Components/NewsCard";
import ItemCard from "../Components/ItemCard";
import { AntDesign } from "@expo/vector-icons";
import CustomModel from "../Components/CustomModel";
import { useSelector } from "react-redux";
const HomeScreen = ({ navigation }) => {
  const [selected, setselected] = useState("All");
  const [showModal, setshowModal] = useState(false);
  const [chocoItems, setchocoItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchtxt, setsearchtxt] = useState("");
  const { choclateList, lastupdate } = useSelector((state) => state.project);
  const myfilteredlist = () => {
    // const statusBg =

    if (selected !== "All") {
      const filtered =
        choclateList &&
        choclateList?.filter((data) => selected === data?.status);
      setchocoItems(filtered);
    } else {
      setchocoItems(choclateList);
    }
  };
  useEffect(() => {
    setisLoading(true);
    if (choclateList) {
      setchocoItems(choclateList);
      setisLoading(false);
    }
  }, [choclateList]);

  // const chocoItems = res.choclateList ? res.choclateList : [];

  const toggleModal = () => {
    setshowModal(!showModal);
  };
  useEffect(() => {
    myfilteredlist();
  }, [selected]);

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
        setselected("RECOMMENDED");
        setshowModal(false);
      },
    },
    {
      title: "NR",
      onpressfun: () => {
        setselected("CANNOT_RECOMMEND");
        setshowModal(false);
      },
    },
    {
      title: "M",
      onpressfun: () => {
        setselected("MIXED");
        setshowModal(false);
      },
    },
  ];
  const itemonPress = (data) => {
    navigation.navigate("chocoItemDesc", { data: data });
  };
  const searchfun = () => {
    const newres =
      choclateList &&
      choclateList.filter((dat) => {
        const newtitle = dat.name.toUpperCase();
        const serchtext = searchtxt.toUpperCase();
        return newtitle === serchtext || newtitle.includes(serchtext);
      });
    if (newres) {
      setchocoItems(newres);
    }
  };
  useEffect(() => {
    searchfun();
  }, [searchtxt]);

  return (
    <>
      <SafeAreaView style={styles.bgdiv}>
        <ScreenHeader
          isMenuButton
          title={
            selected === "All"
              ? "All"
              : selected === "RECOMMENDED"
              ? "Recomanded"
              : selected === "CANNOT_RECOMMEND"
              ? "Not Recomanded"
              : selected === "MIXED"
              ? "Mixed"
              : ""
          }
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
          {/* <ScrollView> */}
          <TextInput
            placeholder="search"
            style={styles.searchinp}
            onChangeText={(text) => setsearchtxt(text)}
          />

          <ScrollView>
            <NewsCard onClickf={() => navigation.navigate("newsDesc")} />
            <HeaderInfo
              title="CHOCOLATE LIST"
              subtitle={"Last Updated:" + `${lastupdate}`}
            >
              <TouchableOpacity onPress={toggleModal} style={styles.flters}>
                <View style={styles.minibtn}>
                  <Text>Filters</Text>
                  <AntDesign name="right" size={24} color="black" />
                </View>
                <View style={styles.selecteddiv}>
                  <Text style={styles.statsTxt}>
                    {selected === "All"
                      ? "All"
                      : selected === "RECOMMENDED"
                      ? "Recomanded"
                      : selected === "CANNOT_RECOMMEND"
                      ? "Not Recomanded"
                      : selected === "MIXED"
                      ? "Mixed"
                      : ""}
                  </Text>
                </View>
              </TouchableOpacity>
            </HeaderInfo>
            {choclateList && chocoItems && !isLoading ? (
              <FlatList
                data={chocoItems}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <ItemCard data={item} onClickF={itemonPress} />
                )}
              />
            ) : (
              <View style={styles.isLoading}>
                <ActivityIndicator size="large" color={mainColor} />
              </View>
            )}
          </ScrollView>
        </View>
        <CustomNavBtn
          data={data}
          activeVal={
            selected === "All"
              ? "All"
              : selected === "RECOMMENDED"
              ? "R"
              : selected === "CANNOT_RECOMMEND"
              ? "NR"
              : selected === "MIXED"
              ? "M"
              : ""
          }
        />
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
    width: w("90%"),
    height: h("6%"),
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginVertical: h("1%"),
    borderRadius: h("2%"),
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
  isLoading: {
    width: "100%",
    height: h("30%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
