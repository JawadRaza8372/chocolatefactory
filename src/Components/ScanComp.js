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
import { useSelector } from "react-redux";
import axios from "axios";
import TweetSharComp from "./TweetSharComp";
import FbShareComp from "./FbShareComp";
import NotFoundComp from "./NotFoundComp";
const ScanComp = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productNotFound, setproductNotFound] = useState(false);
  const [codeRes, setcodeRes] = useState("");
  const { choclateList, lastupdate } = useSelector((state) => state.project);

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
  const handleBarCodeScanned = async ({ type, data }) => {
    // if (type === "512" || type === 512) {
    setScanned(true);
    // setcodeRes(data);
    await fetchItemDetail(data);
    // } else {
    //   alert("not supported this format");
    //   setScanned(true);
    // }
  };
  // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  const fetchItemDetail = async (code) => {
    const itemDet3 = await axios.get(`https://barcode.monster/api/${code}`, {
      headers: { "User-Agent": "Chocolate List App", Version: "1.0" },
    });
    // console.log("checking=>", itemDet3);
    // const itemDet2 = await axios.get(
    //   `https://world.openfoodfacts.org/api/v0/product/${code}.json`
    // );
    // console.log("checking==>", itemDet2);
    if (itemDet3.data.status === "not found" || !itemDet3.data.company) {
      const itemDet2 = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${codeRes}.json`,
        { headers: { "User-Agent": "Chocolate List App", Version: "1.0" } }
      );
      if (itemDet2.data.status === 0) {
        console.log("product not found");
        setproductNotFound(true);
      } else {
        setcodeRes(itemDet2.data.product_name);
      }
    } else {
      setcodeRes(itemDet3.data.company);
    }
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
      // name, status, logo_url
      const product = choclateList.filter((dat) => dat.name === codeRes);
      const statusBg =
        product.status === "RECOMMENDED"
          ? "green"
          : product.status === "CANNOT_RECOMMEND"
          ? "red"
          : product.status === "MIXED"
          ? "gold"
          : "black";
      const recomandtxt = ` Thank ${name} for not using Chocolate\nfrom some of the worse areas with Child Slavery.`;
      const recomandMsg = `I am very Thank to  ${name}  for not using Chocolate\nfrom some of the worse areas with Child Slavery.`;
      const notRecomadMsg = `I am here to inform  ${name}  that i won’t be buy from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;

      const notRecomadtext = `Inform ${name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
      const mixedtxt = `Inform ${name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
      const mynotesrecom = `Company Responded & Veriﬁed Chocolate\nis not sourced from some of the worse areas\nwith Child Slavery`;
      let textdec =
        product.status === "RECOMMENDED"
          ? recomandtxt
          : product.status === "CANNOT_RECOMMEND"
          ? notRecomadtext
          : product.status === "MIXED"
          ? mixedtxt
          : "";
      let textmsg =
        product.status === "RECOMMENDED"
          ? recomandMsg
          : product.status === "CANNOT_RECOMMEND"
          ? notRecomadMsg
          : product.status === "MIXED"
          ? notRecomadMsg
          : "";

      return (
        <>
          <Text style={styles.compName}>{product.name}</Text>
          <View style={{ ...styles.status, backgroundColor: statusBg }}>
            <Text style={styles.statusTxt}>{product.status}</Text>
          </View>
          <Text style={styles.desc}>{textdec}</Text>
          {product.status === "RECOMMENDED" && <SharetoLink content="1" />}
          <TweetSharComp nowText={textmsg} />
          <FbShareComp nowText={textmsg} />
        </>
      );
    } else {
      if (productNotFound) {
        return <NotFoundComp />;
      } else {
        return null;
      }
    }
  };

  return (
    <View style={styles.scandiv}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <View
          style={{
            ...styles.scanCom,
            height: codeRes || productNotFound ? h("20%") : h("85.6%"),
          }}
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
