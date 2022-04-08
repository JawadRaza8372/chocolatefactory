import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import qs from "qs";

const sendEmail = async (to, subject, body, options = {}) => {
  const { cc, bcc } = options;

  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    console.error("error");

    throw new Error("Provided URL can not be handled");
  }

  return Linking.openURL(url);
};
const sendclick = () => {
  console.log("started");
  const check = sendEmail(
    "info@foodispower.org",
    "I would like to",
    "UserName, we need 2 minutes of your time to fill this quick survey",
    { cc: "info@foodispower.org" }
  ).then(() => {
    console.log("Your message was successfully sent!");
  });
  console.log("ended");

  return check;
};
const ContactUs = () => {
  console.log("started");
  const check = sendEmail(
    "info@foodispower.org",
    "I would like to discuss/report an issue/suggestion.",
    "Details:",
    { cc: "info@foodispower.org" }
  ).then(() => {
    console.log("Your message was successfully sent!");
  });
  console.log("ended");

  return check;
};
const AddProduct = () => {
  console.log("started");
  const check = sendEmail(
    "info@foodispower.org",
    "I would like to suggest to add this brand in your list",
    "Brand Details:",
    { cc: "info@foodispower.org" }
  ).then(() => {
    console.log("Your message was successfully sent!");
  });
  console.log("ended");

  return check;
};
const donateUrl = async () => {
  await Linking.openURL("https://foodispower.org/donate/");
};
const AboutUrl = async () => {
  await Linking.openURL("https://foodispower.org/mission-and-values/");
};
export { sendclick, donateUrl, AboutUrl, ContactUs, AddProduct };
//     [8:55 am, 06/04/2022] Umer Aftab 2 Uol: 1. We can have this info go to info@foodispower.org
// 2. Same email for the contact page info@foodispower.org
// 3. The donation place doesn’t have an API for this sort of stuff. So could we just have the donate links go to: https://foodispower.org/donate/
// 4. Can we have the Barcode scanner lookup the code on https://upcdatabase.org? I can get you the API key. If the barcode number returns a match,
//  we would just check the name of the company to see if it’s in our list and return the results if it is.
// [8:55 am, 06/04/2022] Umer Aftab 2 Uol: I figured we would do something like:

// We can use the demo/test api key until I get the actual api key.
// The barcodeNum variable would come from the scanner.So the below scanned image would create
//  the searchUrl = "https://api.upcdatabase.org/product/034000149018?apikey=098f6bc22621d_demo_4de4e8326b4f6"
// if we fetched that URL then we can check that data with our data to see if the name contain's any matches and display matches from our database. Open to other ideas though.
