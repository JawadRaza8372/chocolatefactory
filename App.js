import { StyleSheet, Text, View, StatusBar } from "react-native";
import MyStackNavig from "./src/AppNavigation/MyStackNavig";
import ChoclateDetl from "./src/Views/ChoclateDetl";
import HomeScreen from "./src/Views/HomeScreen";
import NewsDetail from "./src/Views/NewsDetail";
import SplashScreen from "./src/Views/SplashScreen";
import SrchScnScreen from "./src/Views/SrchScnScreen";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store/index";
import { setChocoList, setFeatures } from "./src/store/projectSlice";
import axios from "axios";
export default function App() {
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
