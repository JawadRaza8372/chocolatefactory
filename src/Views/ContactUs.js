import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { mainColor, screenbg } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import CustomButton from "../Components/CustomButton";
import CustomLabldInput from "../Components/CustomLabldInput";
import CustomLabldInpPara from "../Components/CustomLabldInpPara";
import { Entypo } from "@expo/vector-icons";
import { contactUs } from "../Components/SendMailComp";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
const ContactUs = ({ navigation }) => {
  const [formData, setformData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  const onSubmitf = () => {
    if (formData.subject.length > 4) {
      if (formData.name.length > 4) {
        if (formData.email.length > 4) {
          if (formData.message.length > 10) {
            contactUs(formData);
          } else {
            alert("Please enter a valid suggestion or complaint");
          }
        } else {
          alert("Please enter valid email of atleast 5 letters");
        }
      } else {
        alert("Please enter valid name of atleast 5 letters");
      }
    } else {
      alert("Please enter valid subject of atleast 5 letters");
    }
  };

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
          {/* <Text style={styles.optionslabl}>Subject</Text> */}
          {/* <View style={styles.options}>
            <Text>Genral</Text>
            <Entypo name="chevron-right" size={h("4%")} color={"black"} />
          </View> */}
          <CustomLabldInput
            title="Subject"
            placeholder="General"
            value={formData.subject}
            textchange={(text) =>
              setformData((prevalue) => {
                return {
                  ...prevalue,
                  subject: text,
                };
              })
            }
          />
          <CustomLabldInput
            title="Name"
            placeholder="Your Name"
            value={formData.name}
            textchange={(text) =>
              setformData((prevalue) => {
                return {
                  ...prevalue,
                  name: text,
                };
              })
            }
          />
          <CustomLabldInput
            title="Email"
            placeholder="Your Email"
            value={formData.email}
            textchange={(text) =>
              setformData((prevalue) => {
                return {
                  ...prevalue,
                  email: text,
                };
              })
            }
          />
          <CustomLabldInpPara
            title="Message"
            placeholder="Your Message"
            value={formData.message}
            textchange={(text) =>
              setformData((prevalue) => {
                return {
                  ...prevalue,
                  message: text,
                };
              })
            }
          />
          <CustomButton title="Send" onClick={onSubmitf} />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  scanCom: {
    width: w("100%"),
    height: h("24%"),
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
