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
const AboutUs = ({ navigation }) => {
  const splashData = [
    {
      key: 1,
      img: require("../../assets/empowe.png"),
      heading: "About",
      onPressFun: () => {
        AboutUrl("https://foodispower.org/");
      },
      subheading:
        "Food Empowerment Project seeks to\ncreate a more just and sustainable\nworld by recognizing the power of\none’s food choices.",
    },
    {
      key: 2,
      img: require("../../assets/cows.png"),
      heading: "Veganism",
      onPressFun: () => {
        AboutUrl("https://foodispower.org/veganism/");
      },

      subheading:
        "F.E.P. works to promote ethical\nveganism through education,\nthrough outreach, and also by\nproviding tools to help people go\nvegan  ",
    },
    {
      key: 3,
      img: require("../../assets/farm.png"),
      heading: "farm workers",
      onPressFun: () => {
        AboutUrl("https://foodispower.org/farm-workers");
      },

      subheading:
        "F.E.P. works to advance the rights\nof farm workers by supporting\ncorporate, legislative, and\nregulatory changes. ",
    },
    {
      key: 4,
      img: require("../../assets/child.png"),
      heading: "Chocolate TRANSPARENCY",
      onPressFun: () => {
        AboutUrl("https://foodispower.org/chocolate/");
      },

      subheading:
        "F.E.P. is working to inform\nconsumers around the globe about\nthe worst forms of child labor,\nincluding slavery, that take place for\nchocolate.",
    },
    {
      key: 5,
      img: require("../../assets/pple.png"),
      heading: "ACCESS TO HEALTHY FOOD",
      onPressFun: () => {
        AboutUrl("https://foodispower.org/access/");
      },

      subheading:
        "When asked, F.E.P. works with\ncommunity members to survey the\naccess to healthy foods...",
    },
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
        title={"About Us"}
        onPressFun={() => navigation.toggleDrawer()}
      />
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={splashData}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <>
                <View style={styles.maindiv}>
                  <Text style={styles.heading}>{item.heading}</Text>

                  <Image source={item.img} style={styles.spalshImg} />
                  <Text style={styles.descripttxt}>{item.subheading}</Text>
                  <View style={styles.navdotsCont}>
                    {splashData.map((dat, index) => (
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
                    ))}
                  </View>
                  <CustomButton
                    title={item.key === 6 ? "Donate" : "Learn More"}
                    onClick={() => {
                      item.key === 6 ? donateUrl() : item.onPressFun();
                    }}
                  />
                </View>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;

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
