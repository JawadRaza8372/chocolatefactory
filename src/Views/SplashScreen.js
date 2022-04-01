import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import { w, h } from "react-native-responsiveness";
import { screenbg } from "../AppColors";
import { useDispatch } from "react-redux";
import { setChocoList, setFeatures, setUpdate } from "../store/projectSlice";
import axios from "axios";
const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const fetchingData = async () => {
    const checkinggs = await axios.get(
      "https://api-chocolate-list.herokuapp.com/chocolatelist/AppData.json"
    );
    const mydata = checkinggs.data;
    if (mydata) {
      dispatch(setChocoList({ choclateList: mydata.companies }));
      dispatch(setFeatures({ features: mydata.features }));
      dispatch(setUpdate({ lastupdate: mydata.last_updated }));
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("homeScrn");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.firstsvg}>
        <Image
          source={require("../../assets/splshex.png")}
          style={styles.firstimg}
        />
      </View>
      <View style={styles.logodiv}>
        <Image
          source={require("../../assets/applogo.png")}
          style={styles.logoimg}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: screenbg,
  },
  logoimg: {
    width: "75%",
    height: "75%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  firstimg: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "cover",
  },
  firstsvg: {
    width: "100%",
    height: "45%",
  },
  logodiv: {
    width: "100%",
    height: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
