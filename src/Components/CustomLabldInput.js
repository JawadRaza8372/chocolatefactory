import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const CustomLabldInput = ({ title, placeholder, value, textchange }) => {
  return (
    <View style={styles.mainDiv}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={textchange}
        value={value}
      />
    </View>
  );
};

export default CustomLabldInput;

const styles = StyleSheet.create({
  mainDiv: {
    height: h("10%"),
    width: w("90%"),
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  input: {
    width: "100%",
    height: h("6%"),
    backgroundColor: "lightgrey",
    borderRadius: h("6%"),
    paddingHorizontal: w("4%"),
    marginTop: h("1%"),
  },
});
