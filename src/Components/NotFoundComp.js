import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomLabldInput from "./CustomLabldInput";
import { screenbg, mainColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { AddProduct } from "./SendMailComp";
const NotFoundComp = () => {
  const msg = "Can't find the vega choclate\nBrand you are looking for!";
  const [formData, setformData] = useState({
    companyName: "",
    website: "",
    socialMedia: "",
    anything: "",
  });
  const onSubmitf = () => {
    if (formData.companyName.length > 4) {
      if (formData.website.length > 4) {
        if (formData.socialMedia.length > 4) {
          if (formData.anything.length > 0) {
            AddProduct(formData);
          } else {
            alert("Please enter data in Anything field");
          }
        } else {
          alert("Please enter valid Social Media link of atleast 5 letters");
        }
      } else {
        alert("Please enter valid website link of atleast 5 letters");
      }
    } else {
      alert("Please enter valid company name of atleast 5 letters");
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mnbg}>
        <Text style={styles.nores}>No result found</Text>
        <Text style={styles.msgtxt}>{msg}</Text>
        <Text style={styles.desc}>Let u know and we will reach out.</Text>
        <CustomLabldInput
          title={"Choclate Company Name"}
          placeholder="Enter Company Name"
          value={formData.companyName}
          textchange={(text) =>
            setformData((prevalue) => {
              return {
                ...prevalue,
                companyName: text,
              };
            })
          }
        />
        <CustomLabldInput
          title={"Website"}
          placeholder="Enter Website Link"
          value={formData.website}
          textchange={(text) =>
            setformData((prevalue) => {
              return {
                ...prevalue,
                website: text,
              };
            })
          }
        />
        <CustomLabldInput
          title={"Social Media"}
          placeholder="Social Media Link"
          value={formData.socialMedia}
          textchange={(text) =>
            setformData((prevalue) => {
              return {
                ...prevalue,
                socialMedia: text,
              };
            })
          }
        />
        <CustomLabldInput
          title={"Anything Else"}
          placeholder="Something Else"
          value={formData.anything}
          textchange={(text) =>
            setformData((prevalue) => {
              return {
                ...prevalue,
                anything: text,
              };
            })
          }
        />
        <TouchableOpacity onPress={onSubmitf} style={styles.customBt}>
          <Text style={styles.btntxt}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NotFoundComp;

const styles = StyleSheet.create({
  customBt: {
    width: "45%",
    height: h("6%"),
    backgroundColor: mainColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: h("6%"),
    alignSelf: "center",
    marginBottom: h("4%"),
  },
  btntxt: {
    color: screenbg,
    fontSize: h("2.7%"),
  },
  mnbg: {
    width: "98%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: screenbg,
  },
  nores: {
    fontSize: h("2.5%"),
    width: "80%",
    alignSelf: "center",
    marginVertical: h("2%"),
  },

  msgtxt: {
    textAlign: "center",
    fontSize: h("2.2%"),
    marginBottom: h("2%"),
    color: "black",
    fontWeight: "700",
  },
  desc: {
    textAlign: "center",
    fontSize: h("2.2%"),
    marginBottom: h("3%"),
  },
});
