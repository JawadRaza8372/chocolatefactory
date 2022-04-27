// import ScreenHeader from "../Components/ScreenHeader";
// import React, { useState } from "react";
// import {
//   StatusBar,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { w, h } from "react-native-responsiveness";
// import { mainColor, screenbg } from "../AppColors";
// import CustomButton from "../Components/CustomButton";
// import { sendclick } from "../Components/SendMailComp";
// const Donate = ({ navigation }) => {
//   const donationsAmount = [
//     { title: "$10" },
//     { title: "$50" },
//     { title: "$100" },
//     { title: "$250" },
//     { title: "$500" },
//     { title: "$1000" },
//   ];
//   const descp =
//     "By recognizing and making informed food choices, we can prevent injustices against people, the envirement and animals.";
//   return (
//     <SafeAreaView style={{ width: "100%", height: "100%" }}>
//       <ScreenHeader
//         isMenuButton
//         title={"Donate Us"}
//         onPressFun={() => navigation.toggleDrawer()}
//       />
//       <ScrollView
//         contentContainerStyle={{ width: "100%", paddingBottom: h("2.5%") }}
//       >
//         <Image
//           source={{
//             uri: "https://images.unsplash.com/photo-1616911821230-b7ca42658b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//           }}
//           style={styles.imgshow}
//         />
//         <Text style={styles.headingtxt}>
//           Create a more just and sustainable food system
//         </Text>
//         <Text style={styles.desctxt}>{descp}</Text>
//         <View style={styles.dispdont}>
//           {donationsAmount.map((dat, index) => (
//             <TouchableOpacity style={styles.dontView} key={index}>
//               <Text style={styles.amoutntxt}>{dat.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <CustomButton title={"Donate"} onClick={() => sendclick()} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Donate;

// const styles = StyleSheet.create({
//   textCont: {
//     width: "90%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     marginTop: h("4%"),
//   },
//   heading: {
//     fontSize: h("3.5%"),
//     textTransform: "capitalize",
//     textAlign: "center",
//   },
//   descripttxt: {
//     fontSize: h("2.2%"),
//     width: "80%",
//     textAlign: "center",
//   },
//   transparentButton: {
//     width: "20%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   subheading: {
//     color: "lightgrey",
//     fontSize: h("2%"),
//     textAlign: "center",
//   },
//   SkipButton: { color: "lightgrey", fontSize: h("2.5%") },
//   bottomNav: {
//     width: "95%",
//     height: "95%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-evenly",
//     flexDirection: "row",
//   },
//   spalshImg: {
//     width: w("70%"),
//     height: h("23%"),
//     resizeMode: "cover",
//   },
//   contentView: {
//     width: "100%",
//     height: "90%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bottomNavView: {
//     width: "100%",
//     height: "10%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   navdotsCont: {
//     width: "100%",
//     height: "10%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   imgshow: {
//     width: w("70%"),
//     height: h("23%"),
//     resizeMode: "cover",
//     alignSelf: "center",
//   },
//   dispdont: {
//     // width: "100%",
//     // display: "flex",
//     // alignItems: "center",
//     // justifyContent: "space-evenly",
//     // flexDirection: "row",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     flexWrap: "wrap",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginBottom: h("2.5%"),
//   },
//   dontView: {
//     width: "45%",
//     height: h("9%"),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: "lightgrey",
//     marginBottom: h("1.5%"),
//   },
//   amoutntxt: {
//     fontSize: h("3%"),
//     color: mainColor,
//     fontWeight: "bold",
//   },
//   headingtxt: {
//     width: "80%",
//     fontSize: h("3.5%"),
//     alignSelf: "center",
//     marginVertical: h("2%"),
//     textTransform: "capitalize",
//     fontWeight: "700",
//     textAlign: "center",
//   },
//   desctxt: {
//     fontSize: h("2.2%"),
//     width: "80%",
//     alignSelf: "center",
//     marginBottom: h("2%"),
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Donate = () => {
//   return (
//     <View>
//       <Text>Donate</Text>
//     </View>
//   )
// }

// export default Donate

// const styles = StyleSheet.create({})
// import ScreenHeader from "../Components/ScreenHeader";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   Image,
// } from "react-native";
// import { w, h } from "react-native-responsiveness";
// import React, { useState } from "react";
// import { AntDesign } from "@expo/vector-icons";
// import { mainColor, screenbg } from "../AppColors";
// import CustomButton from "../Components/CustomButton";
// const AboutUs = ({ navigation }) => {
//   // https://foodispower.org
//   // https://food-empowerment-project.networkforgood.com/projects/11476-f-e-p
//   const desx =
//     "Food Empowerment Project is a vegan food justice organization that believes in the power of one's food choices.";
//   const next =
//     "We promote veganism as a means to eliminate the suffering of non-human animals, work in solidarity with farm workers advocating for corporate and regulatory changes and also coordinate an annual school supply for the children of farm workers, we work on access to healthy foods in communities of color and low-income communities and we work to encourage people to not buy chocolate sourced from the worst forms of child labor, including slavery.";
//   const resa =
//     "As a small non-profit organization, we appreciate any donations to  help support our work.";
//   return (
//     <SafeAreaView
//       style={{ width: "100%", height: "100%", backgroundColor: screenbg }}
//     >
//       <ScreenHeader
//         isMenuButton={true}
//         title={"About Us"}
//         onPressFun={() => navigation.toggleDrawer()}
//       />
//       <ScrollView contentContainerStyle={{ width: "100%" }}>
//         <View style={styles.scanCom}>
//           <Image
//             source={require("../../assets/empowe.png")}
//             style={styles.imgshow}
//           />
//         </View>
//         <Text style={styles.desc}>{desx}</Text>
//         <Text style={styles.desc}>{next}</Text>
//         <Text style={styles.desc}>{resa}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AboutUs;

// const styles = StyleSheet.create({
//   scanCom: {
//     width: "100%",
//     height: h("45%"),
//     marginBottom: h("2%"),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imgshow: {
//     width: "80%",
//     height: "80%",
//     resizeMode: "contain",
//   },
//   desc: {
//     fontSize: h("2.5%"),
//     width: "90%",
//     alignSelf: "center",
//     marginBottom: h("3%"),
//   },
//   title: {
//     fontSize: h("2.8%"),
//     width: "90%",
//     alignSelf: "center",
//     marginVertical: h("3%"),
//     textAlign: "center",
//     color: mainColor,
//     fontWeight: "bold",
//   },
// });
import ScreenHeader from "../Components/ScreenHeader";
import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenbg } from "../AppColors";
import CustomButton from "../Components/CustomButton";
import { AboutUrl, donateUrl } from "../Components/SendMailComp";
const Donate = ({ navigation }) => {
  const splashData = [
    {
      key: 6,
      img: require("../../assets/empowe.png"),
      heading: "donate",
      subheading:
        "Help us to create a more just and\nsustainable food system for all with\nyour tax deductible donation.",
    },
  ];
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ScreenHeader
        isMenuButton
        title={"Donate"}
        onPressFun={() => navigation.toggleDrawer()}
      />
      <View style={{ width: "100%", flex: 1 }}>
        <View style={styles.maindiv}>
          <Text style={styles.heading}>donate</Text>

          <Image
            source={require("../../assets/empowe.png")}
            style={styles.spalshImg}
          />
          <Text style={styles.descripttxt}>
            {`Help us to create a more just and\nsustainable food system for all with\nyour tax deductible donation.`}
          </Text>
          {/* <View style={styles.navdotsCont}> */}
          {/* {splashData.map((dat, index) => (
              <View
                key={index}
                style={{
                  width: index === item.key - 1 ? 30 : 10,
                  height: 10,
                  borderRadius: 10,
                  marginHorizontal: 2,
                  backgroundColor:
                    index === item.key - 1 ? mainColor : "lightgrey",
                }}
              />
            ))} */}
          {/* </View> */}
          <CustomButton
            title={"Donate"}
            onClick={() => {
              donateUrl();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Donate;

const styles = StyleSheet.create({
  textCont: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: h("4%"),
  },
  heading: {
    fontSize: h("3.5%"),
    textTransform: "capitalize",
    textAlign: "center",
  },
  descripttxt: {
    fontSize: h("2.2%"),
    width: "80%",
    textAlign: "center",
  },
  transparentButton: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subheading: {
    color: "lightgrey",
    fontSize: h("2%"),
    textAlign: "center",
  },
  SkipButton: { color: "lightgrey", fontSize: h("2.5%") },
  bottomNav: {
    width: "95%",
    height: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  spalshImg: {
    width: w("70%"),
    height: h("23%"),
    resizeMode: "cover",
  },
  contentView: {
    width: "100%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavView: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navdotsCont: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  maindiv: {
    width: w("100%"),
    height: "100%",
    backgroundColor: screenbg,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});
