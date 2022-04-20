import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SharetoLink from "./SharetoLink";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { setFeatures } from "../store/projectSlice";
import { useDispatch } from "react-redux";
const SetAsFvrt = ({ name }) => {
  const dispatch = useDispatch();
  const { features } = useSelector((state) => state.project);
  const savedata = async () => {
    let value = [...features, { name: name }];
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("chocFavrt", jsonValue);
    } catch (e) {
      // saving error
    }
    const jsonValue1 = await AsyncStorage.getItem("chocFavrt");
    if (
      jsonValue1 !== null &&
      jsonValue1 !== "" &&
      jsonValue1 !== {} &&
      jsonValue1 !== undefined &&
      jsonValue1 !== "underfined"
    ) {
      dispatch(setFeatures({ features: JSON.parse(jsonValue1) }));
    }
  };
  return (
    <TouchableOpacity onPress={savedata}>
      <SharetoLink content={"1"} />
    </TouchableOpacity>
  );
};

export default SetAsFvrt;

const styles = StyleSheet.create({});
