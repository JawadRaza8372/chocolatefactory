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
import SetAsfvrt from "./SetAsFvrt";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import SharetoLink from "./SharetoLink";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TweetSharComp from "./TweetSharComp";
import FbShareComp from "./FbShareComp";
import NotFoundComp from "./NotFoundComp";
import { setFeatures } from "../store/projectSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomBarCodeScanner from "./CustomBarCodeScanner";
const ScanComp = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productNotFound, setproductNotFound] = useState(false);
  const [codeRes, setcodeRes] = useState("");
  const [product, setproduct] = useState([]);
  const { choclateList, lastupdate } = useSelector((state) => state.project);
  const { features } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const clearfunc = () => {
    setScanned(false);
    setcodeRes("");
    setproductNotFound(false);
  };
  const handleBarCodeScanned = async ({ type, data }) => {
    // if (type === "512" || type === 512) {
    setScanned(true);
    // setcodeRes(data);
    const itemDet3 = await axios.get(`https://barcode.monster/api/${data}`, {
      headers: { "User-Agent": "Chocolate List App", Version: "1.0" },
    });
    const itemDet2 = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${data}.json`,
      { headers: { "User-Agent": "Chocolate List App", Version: "1.0" } }
    );
    if (itemDet3.data.status === "not found" && itemDet2.data.status === 0) {
      setproductNotFound(true);
    } else {
      let name = itemDet3.data.company
        ? itemDet3.data.company
        : itemDet2.data.product_name;
      setcodeRes(name);
      // const newname = name.substring(0, 5);
      let newproduct =
        choclateList &&
        choclateList?.filter(
          (dat) =>
            dat.name.replace(/[^a-zA-Z ]/g, "") ===
            name.replace(/[^a-zA-Z ]/g, "")
        );
      setproduct(newproduct);
    }
    // } else {
    //   alert("not supported this format");
    //   setScanned(true);
    // }
  };
  // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  const checkingrenders = () => {
    if (codeRes) {
      // name, status, logo_url

      if (product.length > 0) {
        const statusBg =
          product[0].status === "RECOMMENDED"
            ? "green"
            : product[0].status === "CANNOT_RECOMMEND"
            ? "red"
            : product[0].status === "MIXED"
            ? "gold"
            : "black";

        const removedata = async () => {
          const filterdDat = features.filter(
            (dat) => dat.name !== product[0].name
          );
          try {
            const jsonValue = JSON.stringify(filterdDat);
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
          alert("Removed from favrote");
        };

        const recomandtxt = ` Thank ${product[0].name} for not using Chocolate\nfrom some of the worse areas with Child Slavery.`;
        const recomandMsg = `I am very Thank to  ${product[0].name}  for not using Chocolate\nfrom some of the worse areas with Child Slavery.`;
        const notRecomadMsg = `I am here to inform  ${product[0].name}  that i won’t be buy from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;

        const notRecomadtext = `Inform ${product[0].name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
        const mixedtxt = `Inform ${product[0].name} that you won’t be buying from\nthem until they agree to not using\nChocolate from some of the worst ares with Child Slavery.`;
        const mynotesrecom = `Company Responded & Veriﬁed Chocolate\nis not sourced from some of the worse areas\nwith Child Slavery`;
        const common = `Cannot recommend because company\n${
          product[0].status === "MIXED" ? "still " : ""
        }sources ${
          product[0].status === "MIXED" ? "some of it's " : ""
        } cocao from some of the \nworst areas of Child Slavery`;

        let textdec =
          product[0].status === "RECOMMENDED"
            ? recomandtxt
            : product[0].status === "CANNOT_RECOMMEND"
            ? notRecomadtext
            : product[0].status === "MIXED"
            ? mixedtxt
            : "";
        let textmsg =
          product[0].status === "RECOMMENDED"
            ? recomandMsg
            : product[0].status === "CANNOT_RECOMMEND"
            ? notRecomadMsg
            : product[0].status === "MIXED"
            ? notRecomadMsg
            : "";
        const linethrough =
          product[0].status_reason === "CANNOT_RECOMMEND_OTHER_ISSUES"
            ? true
            : false;
        const check =
          features && features?.filter((dat) => dat.name === product[0].name);
        return (
          <>
            <Text
              style={
                linethrough
                  ? { ...styles.compName, ...styles.strikethrough }
                  : styles.compName
              }
            >
              {product[0].name}
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  ...styles.status,
                  backgroundColor: statusBg ? statusBg : "black",
                }}
              >
                <Text style={styles.statusTxt}>
                  {product[0].status ? product[0].status : "Unkonwn"}
                </Text>
              </View>
              {check.length > 0 && (
                <TouchableOpacity onPress={removedata}>
                  <AntDesign name="heart" size={h("4%")} color="red" />
                </TouchableOpacity>
              )}
            </View>
            {/* <View style={{ ...styles.status, backgroundColor: statusBg }}>
              <Text style={styles.statusTxt}>{product[0].status}</Text>
            </View> */}
            <View style={styles.scanCompimg}>
              <Image
                source={{
                  uri: product[0].logo_url,
                }}
                style={styles.imgshow}
              />
            </View>
            <Text style={styles.descttit}>Company Note</Text>
            <Text style={styles.desc}>
              {product[0].status === "RECOMMENDED" && mynotesrecom}
              {(product[0].status === "CANNOT_RECOMMEND" ||
                product[0].status === "MIXED") &&
                common}
            </Text>

            <Text style={styles.descttit}>Take Actions</Text>

            <Text style={styles.desc}>{textdec}</Text>
            {product[0].status === "RECOMMENDED" && (
              <SetAsfvrt name={product[0].name} />
            )}
            <TweetSharComp nowText={textmsg} />
            <FbShareComp nowText={textmsg} />
          </>
        );
      } else {
        return <NotFoundComp />;
      }
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
            <CustomBarCodeScanner onScanned={handleBarCodeScanned} />
          )}
          {/* <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ width: w("100%"), height: h("100") }}
            /> */}
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
    width: "60%",
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
  scanCompimg: {
    width: w("35%"),
    height: w("35%"),
    backgroundColor: screenbg,
    marginBottom: h("2%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imgshow: {
    width: w("35%"),
    height: w("35%"),
    resizeMode: "contain",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
