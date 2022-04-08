import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import SharetoLink from "./SharetoLink";
import CustomButton from "./CustomButton";
import axios from "axios";
const ScanComp = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [codeRes, setcodeRes] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const clearfunc = () => {
    setScanned(false);
    setcodeRes("");
  };
  const handleBarCodeScanned = ({ type, data }) => {
    // if (type === "512" || type === 512) {
    setScanned(true);
    setcodeRes(data);
    console.log(data);
    // } else {
    //   alert("not supported this format");
    //   setScanned(true);
    // }
  };
  // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  const fetchItemDetail = async () => {
    // const baseUrl = "https://api.upcdatabase.org/product/";
    // var barcodeNum = ""; // get barcode number from barcode scanner
    // const apiKey = "?apikey=098f6bc22621d_demo_4de4e8326b4f6";
    // var searchUrl = {$ baseUrl}{$barcodeNum}{$apiKey};

    const itemDet = await axios.post(
      `https://api.upcdatabase.org/product/${codeRes}?apikey=098f6bc22621d_demo_4de4e8326b4f6`
    );
    console.log(itemDet);
  };
  useEffect(() => {
    if (codeRes) {
      fetchItemDetail();
    }
  }, [codeRes]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const checkingrenders = () => {
    if (codeRes) {
      return (
        <>
          <Text style={styles.compName}>Company Name</Text>
          <View style={{ ...styles.status, backgroundColor: statusBg }}>
            <Text style={styles.statusTxt}>{statustxt}</Text>
          </View>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <SharetoLink content="1" />
          <SharetoLink content="2" />
          <SharetoLink content="3" />
        </>
      );
    } else {
      return null;
    }
  };
  const status = "NR";
  const statusBg =
    status === "R"
      ? "green"
      : status === "NR"
      ? "red"
      : status === "M"
      ? "gold"
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
    <View style={styles.scandiv}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <View
          style={{ ...styles.scanCom, height: codeRes ? h("45%") : h("85.6%") }}
        >
          {scanned ? (
            <CustomButton title={"Scan"} onClick={clearfunc} />
          ) : (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ width: w("100%"), height: h("100") }}
            />
          )}
        </View>
        {checkingrenders()}
      </ScrollView>
    </View>
  );
};

export default ScanComp;

const styles = StyleSheet.create({
  scandiv: {
    width: "100%",
    height: "100%",
  },
  scanCom: {
    width: "100%",
    height: h("45%"),
    marginBottom: h("2%"),
    borderRadius: h("2%"),
    borderWidth: 2,
    borderColor: "lightgrey",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
  compName: {
    fontSize: h("2.3%"),
    textAlign: "center",
    fontWeight: "bold",
  },
});
