import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import SharetoLink from "./SharetoLink";
const TweetSharComp = ({ nowText }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(`https://twitter.com/share?text=${nowText}`);
      }}
    >
      <SharetoLink content="2" />
    </TouchableOpacity>
  );
};

export default TweetSharComp;

const styles = StyleSheet.create({});
