import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { screenbg, mainColor } from "../AppColors";

const ScreenHeader = ({
  isMenuButton,
  title,
  linethrough,

  onPressFun,
  scanbtn,
  onPressFunScan,
  children,
}) => {
  return (
    <View style={styles.screenHeader}>
      <View style={styles.backButtonCont}>
        {isMenuButton ? (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              onPressFun();
            }}
          >
            <Entypo name="menu" size={h("5%")} color={screenbg} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              onPressFun();
            }}
          >
            <Entypo name="chevron-left" size={h("5%")} color={screenbg} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.screenHeadCont}>
        {title && (
          <Text
            style={
              linethrough
                ? { ...styles.screenTitle, ...styles.strikethrough }
                : styles.screenTitle
            }
          >
            {title}
          </Text>
        )}
        {children && children}
      </View>
      <View style={styles.avatrCont}>
        {scanbtn && (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              onPressFunScan();
            }}
          >
            <MaterialIcons
              name="qr-code-scanner"
              size={h("5%")}
              color={screenbg}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    height: h("7%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: mainColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  backButtonCont: {
    width: "20%",
    height: "100%",
  },
  avtarImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  screenHeadCont: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatrCont: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customAvtar: {
    width: h("5%"),
    height: h("5%"),
    borderRadius: h("7%"),
    borderWidth: 1,
    color: screenbg,
    overflow: "hidden",
  },
  backbutton: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: h("2.2%"),
    fontWeight: "900",
    color: screenbg,
  },
  strikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "white",
  },
});
