import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import CustomLabldInput from "./CustomLabldInput";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
import ItemCard from "./ItemCard";
const SearchComp = () => {
  const myDat = [{ id: "hy1" }, { id: "hy2" }, { id: "hy3" }];
  const msg = "Can't find the vega choclate\nBrand you are looking for!";
  return (
    <>
      <View style={styles.mnbg}>
        <Text style={styles.nores}>No result found</Text>
        <Text style={styles.msgtxt}>{msg}</Text>
        <Text style={styles.desc}>Let u know and we will reach out.</Text>
        <CustomLabldInput
          title={"Choclate Company Name"}
          placeholder="Enter Company Name"
        />
        <CustomLabldInput title={"Website"} placeholder="Enter Website Link" />
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
      {/* <FlatList
        data={myDat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard />}
      /> */}
    </>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  mnbg: {
    width: "98%",
    height: "100%",
    alignSelf: "center",
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
