import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { w, h } from "react-native-responsiveness";
const CustomBarCodeScanner = ({ onScanned }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log("status", status);
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        onBarCodeScanned={(data) => {
          onScanned(data);
        }}
      ></Camera>
    </View>
  );
};

export default CustomBarCodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: w("100%"),
    height: h("100"),
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
