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
const ChoclateDetl = ({ route, navigation }) => {
  const { data } = route.params;
  const { name, status, logo_url } = data;

  // CANNOT_RECOMMEND;
  // RECOMMENDED;
  // MIXED;
  // "name": "10 degrees chocolate",
  //     "notes": null,
  //     "status": "CANNOT_RECOMMEND",
  //     "status_reason": "CANNOT_RECOMMEND_DID_NOT_RESPOND",
  //     "status_url": null,
  //     "description": null,
  //     "logo_url": "https://media.graphcms.com/rU4nCRuQbyXAYQoMqo07",
  //     "logo_url_retina": "https://media.graphcms.com/rU4nCRuQbyXAYQoMqo07"
  const statusBg =
    status === "RECOMMENDED"
      ? "green"
      : status === "CANNOT_RECOMMEND"
      ? "red"
      : status === "MIXED"
      ? "gold"
      : "black";
  const recomandtxt = ` Thank ${name} for not using Chocolate\nfrom some of the worse areas with Child Slavery.`;
  const notRecomadtext = `Inform ${name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
  const mixedtxt = `Inform ${name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
  const mynotesrecom = `Company Responded & Veriﬁed Chocolate\nis not sourced from some of the worse areas\nwith Child Slavery`;
  const common = `Cannot recommend because company\n${
    status === "MIXED" ? "still " : ""
  }sources ${
    status === "MIXED" ? "some of it's " : ""
  } cocao from some of the \nworst areas of Child Slavery`;
  return (
    <SafeAreaView style={styles.safediv}>
      <ScreenHeader
        title={name ? name : "Company Name"}
        onPressFun={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrolldiv}>
        <View
          style={{
            ...styles.status,
            backgroundColor: statusBg ? statusBg : "black",
          }}
        >
          <Text style={styles.statusTxt}>{status ? status : "Unkonwn"}</Text>
        </View>
        <View style={styles.scanCom}>
          <Image
            source={{
              uri: logo_url,
            }}
            style={styles.imgshow}
          />
        </View>
        <>
          <Text style={styles.descttit}>Company Note</Text>
          <Text style={styles.desc}>
            {status === "RECOMMENDED" && mynotesrecom}
            {(status === "CANNOT_RECOMMEND" || status === "MIXED") && common}
          </Text>
        </>
        <Text style={styles.descttit}>Take Actions</Text>

        <Text style={styles.desc}>
          {status === "RECOMMENDED" && recomandtxt}
          {status === "CANNOT_RECOMMEND" && notRecomadtext}
          {status === "MIXED" && mixedtxt}
        </Text>
        {status === "RECOMMENDED" && <SharetoLink content="1" />}
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
    width: w("65%"),
    height: w("65%"),
    backgroundColor: screenbg,
    marginBottom: h("2%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  status: {
    height: h("6%"),
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
    fontSize: h("2%"),
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
    width: w("50%"),
    height: w("50%"),
    resizeMode: "contain",
  },
  safediv: { width: "100%", height: "100%", backgroundColor: screenbg },
  scrolldiv: { width: "100%", paddingBottom: h("2.5%") },
});
