import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { screenbg } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import SharetoLink from "../Components/SharetoLink";
import ScreenHeader from "../Components/ScreenHeader";
const ChoclateDetl = ({ navigation }) => {
  const status = "NR";
  const statusBg =
    status === "R"
      ? "green"
      : status === "NR"
      ? "red"
      : status === "M"
      ? "yellow"
      : "black";
  const statustxt =
    status === "R"
      ? "Recomanded"
      : status === "NR"
      ? "Not Recomanded"
      : status === "M"
      ? "Mixed"
      : "UnKnown";

  return (
    <SafeAreaView style={styles.safediv}>
      <ScreenHeader
        title={"Company Name"}
        onPressFun={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrolldiv}>
        <View style={{ ...styles.status, backgroundColor: statusBg }}>
          <Text style={styles.statusTxt}>{statustxt}</Text>
        </View>
        <View style={styles.scanCom}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1616911821230-b7ca42658b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.imgshow}
          />
        </View>
        <Text style={styles.descttit}>Company Note</Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text style={styles.descttit}>Take Actions</Text>

        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        {status !== "NR" && <SharetoLink content="1" />}
        <SharetoLink content="2" />
        <SharetoLink content="3" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChoclateDetl;

const styles = StyleSheet.create({
  scandiv: {
    width: "100%",
    height: "100%",
  },
  scanCom: {
    width: "100%",
    height: h("45%"),
    backgroundColor: "black",
    marginBottom: h("2%"),
  },
  status: {
    height: h("4%"),
    width: "50%",
    backgroundColor: "brown",
    borderRadius: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    marginVertical: h("4%"),
  },
  statusTxt: {
    fontSize: h("2.2%"),
    fontWeight: "bold",
    color: screenbg,
  },
  desc: {
    fontSize: h("2.1%"),
    width: "90%",
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  descttit: {
    fontSize: h("2.5%"),
    width: "90%",
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  compName: {
    fontSize: h("2.3%"),
    textAlign: "center",
    fontWeight: "bold",
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  safediv: { width: "100%", height: "100%", backgroundColor: screenbg },
  scrolldiv: { width: "100%", paddingBottom: h("2.5%") },
});
