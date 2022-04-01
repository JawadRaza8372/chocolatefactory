import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const CustomLabldInpPara = ({ title, placeholder, textchange }) => {
  return (
    <View style={styles.mainDiv}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={textchange}
        multiline={true}
      />
    </View>
  );
};

export default CustomLabldInpPara;

const styles = StyleSheet.create({
  mainDiv: {
    height: h("15%"),
    width: w("90%"),
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  input: {
    width: "100%",
    height: h("12%"),
    backgroundColor: "lightgrey",
    borderRadius: h("2%"),
    paddingHorizontal: w("4%"),
    marginTop: h("1%"),
  },
});
