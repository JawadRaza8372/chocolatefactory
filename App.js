import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import MyStackNavig from "./src/AppNavigation/MyStackNavig";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store/index";
export default function App() {
  LogBox.ignoreLogs([
    "SerializableStateInvariantMiddleware",
    "ImmutableStateInvariantMiddleware",
    "VirtualizedLists should never be nested inside plain",
  ]);

  return (
    <Provider store={store}>
      <StatusBar />
      <MyStackNavig />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// import React in our code
// import React, { useState } from "react";

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Linking,
// } from "react-native";

// const App = () => {
//   const [facebookShareURL, setFacebookShareURL] = useState(
//     "https://foodispower.org"
//   );
//   const [postContent, setPostContent] = useState(" hy");

//   const postOnFacebook = () => {
//     let facebookParameters = [];
//     if (facebookShareURL)
//       facebookParameters.push("u=" + encodeURI(facebookShareURL));
//     if (postContent) facebookParameters.push("quote=" + encodeURI(postContent));
//     const url =
//       "https://www.facebook.com/sharer/sharer.php?" +
//       facebookParameters.join("&");

//     Linking.openURL(url)
//       .then((data) => {
//         alert("Facebook Opened");
//       })
//       .catch(() => {
//         alert("Something went wrong");
//       });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Share Facebook Post with URL from React Native App
//         </Text>
//         <Text style={styles.titleTextsmall}>Enter Post Content</Text>
//         <TextInput
//           value={postContent}
//           onChangeText={(postContent) => setPostContent(postContent)}
//           placeholder={"Enter Facebook Post Content"}
//           style={styles.textInput}
//         />
//         <Text style={styles.titleTextsmall}>Enter URL to Share</Text>
//         <TextInput
//           value={facebookShareURL}
//           onChangeText={(facebookShareURL) =>
//             setFacebookShareURL(facebookShareURL)
//           }
//           placeholder={"Enter URL to Share"}
//           style={styles.textInput}
//         />
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={postOnFacebook}
//         >
//           <Text style={styles.buttonTextStyle}>Share on Facebook</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 10,
//     textAlign: "center",
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   titleTextsmall: {
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   buttonStyle: {
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: "#8ad24e",
//     marginRight: 2,
//     marginLeft: 2,
//   },
//   buttonTextStyle: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   textInput: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     width: "100%",
//     paddingHorizontal: 10,
//   },
// });
