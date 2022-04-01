import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomLabldInput from "./CustomLabldInput";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";

const SearchComp = ({ searchtxt, onClick }) => {
  const [chocoItems, setchocoItems] = useState([]);
  const { choclateList } = useSelector((state) => state.project);
  useEffect(() => {
    if (choclateList) {
      setchocoItems(choclateList);
    }
  }, [choclateList]);
  const searchfun = () => {
    const newres =
      choclateList &&
      choclateList.filter((data) => data.name.includes(`${searchtxt}`));
    if (newres) {
      setchocoItems(newres);
    }
  };
  useEffect(() => {
    searchfun();
  }, [searchtxt]);

  const msg = "Can't find the vega choclate\nBrand you are looking for!";
  const rendringComp = () => {
    if (chocoItems.length === 0 && searchtxt) {
      return (
        <KeyboardAwareScrollView>
          <View style={styles.mnbg}>
            <Text style={styles.nores}>No result found</Text>
            <Text style={styles.msgtxt}>{msg}</Text>
            <Text style={styles.desc}>Let u know and we will reach out.</Text>
            <CustomLabldInput
              title={"Choclate Company Name"}
              placeholder="Enter Company Name"
            />
            <CustomLabldInput
              title={"Website"}
              placeholder="Enter Website Link"
            />
            <CustomLabldInput
              title={"Social Media"}
              placeholder="Social Media Link"
            />
            <CustomLabldInput
              title={"Anything Else"}
              placeholder="Something Else"
            />
            <TouchableOpacity style={styles.customBt}>
              <Text style={styles.btntxt}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      );
    } else if (chocoItems && searchtxt) {
      return (
        <FlatList
          data={chocoItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ItemCard data={item} onClickF={() => onClick(item)} />
          )}
        />
      );
    } else {
      return (
        <View style={styles.mnbgNew}>
          <Text style={styles.noresh}>please search with brand name</Text>
        </View>
      );
    }
  };
  return <>{rendringComp()}</>;
};

export default SearchComp;

const styles = StyleSheet.create({
  mnbg: {
    width: "98%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: screenbg,
  },
  mnbgNew: {
    width: "98%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: screenbg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customBt: {
    width: "45%",
    height: h("6%"),
    backgroundColor: mainColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: h("6%"),
    alignSelf: "center",
  },
  btntxt: {
    color: screenbg,
    fontSize: h("2.7%"),
  },
  nores: {
    fontSize: h("2.5%"),
    width: "80%",
    alignSelf: "center",
    marginVertical: h("2%"),
  },
  noresh: {
    fontSize: h("2.5%"),
    textAlign: "center",
    color: "grey",
    textAlign: "center",
    textTransform: "capitalize",
  },
  msgtxt: {
    textAlign: "center",
    fontSize: h("2.2%"),
    marginBottom: h("2%"),
    color: "black",
    fontWeight: "700",
  },
  desc: {
    textAlign: "center",
    fontSize: h("2.2%"),
    marginBottom: h("3%"),
  },
});
