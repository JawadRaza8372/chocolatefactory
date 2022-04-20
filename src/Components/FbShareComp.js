import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";
import SharetoLink from "./SharetoLink";
const FbShareComp = ({ nowText }) => {
  const [facebookShareURL, setFacebookShareURL] = useState(
    "https://foodispower.org"
  );
  const [postContent, setPostContent] = useState("hy");
  useEffect(() => {
    setPostContent(nowText);
  }, []);

  const postOnFacebook = () => {
    let facebookParameters = [];
    if (facebookShareURL)
      facebookParameters.push("u=" + encodeURI(facebookShareURL));
    if (postContent) facebookParameters.push("quote=" + encodeURI(postContent));
    const url =
      "https://www.facebook.com/sharer/sharer.php?" +
      facebookParameters.join("&");

    Linking.openURL(url)
      .then((data) => {
        alert("Facebook Opened");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <TouchableOpacity onPress={postOnFacebook}>
      <SharetoLink content={"3"} />
    </TouchableOpacity>
  );
};

export default FbShareComp;

const styles = StyleSheet.create({});
