import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";

const ContactUs = ({ navigation }) => {
  return (
    <View>
      <ScreenHeader
        isMenuButton
        title={"Contact Us"}
        onPressFun={() => navigation.toggleDrawer()}
      />
      <Text>ContactUs</Text>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
