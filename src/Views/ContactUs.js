import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { mainColor, screenbg } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import CustomButton from "../Components/CustomButton";
import CustomLabldInput from "../Components/CustomLabldInput";
import CustomLabldInpPara from "../Components/CustomLabldInpPara";
import { Entypo } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
const ContactUs = ({ navigation }) => {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ScreenHeader
        isMenuButton
        title={"Contact Us"}
        onPressFun={() => navigation.toggleDrawer()}
      />
      <KeyboardAwareScrollView>
        <ScrollView
          contentContainerStyle={{ width: "100%", paddingBottom: h("4%") }}
        >
          <View style={styles.scanCom}>
            <Image
              source={require("../../assets/contact.jpg")}
              style={styles.imgshow}
            />
            <View style={styles.txtdiv}>
              <Text style={styles.txt}>Contact Us</Text>
            </View>
          </View>
          <Text style={styles.optionslabl}>Subject</Text>
          <View style={styles.options}>
            <Text>Genral</Text>
            <Entypo name="chevron-right" size={h("4%")} color={"black"} />
          </View>
          <CustomLabldInput title="Name" placeholder="Your Name" />
          <CustomLabldInput title="Email" placeholder="Your Email" />
          <CustomLabldInpPara title="Message" placeholder="Your Message" />
          <CustomButton title="Send" onClick={() => console.log("send")} />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  scanCom: {
    width: w("100%"),
    height: h("35%"),
    marginBottom: h("2%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  txtdiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    top: 0,
  },
  txt: {
    fontSize: h("6%"),
    textAlign: "center",
    color: screenbg,
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  options: {
    height: h("6%"),
    width: w("90%"),
    alignSelf: "center",
    marginBottom: h("3%"),
    borderRadius: h("3%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: w("4%"),
    backgroundColor: "lightgrey",
  },
  optionslabl: {
    height: h("4%"),
    width: w("90%"),
    alignSelf: "center",
  },
});
