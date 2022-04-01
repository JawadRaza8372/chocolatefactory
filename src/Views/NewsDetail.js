import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { mainColor, screenbg } from "../AppColors";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
const NewsDetail = ({ navigation }) => {
  const desx =
    "This list reflects Food Empowerment Project's most recent research on companies that make vegan products containing chocolate to find out if it is sourced from areas where the worst forms of child labor, including slavery, take place.";
  const next =
    "All of the companies listed make vegan chocolates, but some make non-vegan chocolates as well, so we encourage you to read the ingredients.";
  const newa =
    "The list is updated once a month. To learn more about the categories on our list, check our our blog post:Understanding Food Empowerment Project’s Chocolate list.";
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: screenbg }}
    >
      <ScreenHeader
        title={"Understanding F.E.P's List"}
        onPressFun={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <View style={styles.scanCom}>
          <Image
            source={{
              uri: "https://media.graphcms.com/624ORNyySIO0QzfvJdMK",
            }}
            style={styles.imgshow}
          />
        </View>
        <Text style={styles.desc}>{desx}</Text>
        <Text style={styles.desc}>{next}</Text>
        <Text style={styles.desc}>{newa}</Text>

        {/* http://appetiteforjustice.blogspot.com/2011/05/understanding-food-empowerment-projects.html\ */}
        {/* <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  scanCom: {
    width: "100%",
    height: h("45%"),
    backgroundColor: "black",
    marginBottom: h("2%"),
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  desc: {
    fontSize: h("2.5%"),
    width: "90%",
    alignSelf: "center",
    marginBottom: h("3%"),
  },
  title: {
    fontSize: h("2.8%"),
    width: "90%",
    alignSelf: "center",
    marginVertical: h("3%"),
    textAlign: "center",
    color: mainColor,
    fontWeight: "bold",
  },
});
