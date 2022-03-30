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
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: screenbg }}
    >
      <ScreenHeader
        title={"News Briefing"}
        onPressFun={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Text style={styles.title}>Heading comes here</Text>
        <View style={styles.scanCom}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1616911821230-b7ca42658b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmllbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.imgshow}
          />
        </View>
        <Text style={styles.desc}>
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
        </Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
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
