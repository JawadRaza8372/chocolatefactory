import { StyleSheet, Text, View, StatusBar } from "react-native";
import MyStackNavig from "./src/AppNavigation/MyStackNavig";
import ChoclateDetl from "./src/Views/ChoclateDetl";
import HomeScreen from "./src/Views/HomeScreen";
import NewsDetail from "./src/Views/NewsDetail";
import SplashScreen from "./src/Views/SplashScreen";
import SrchScnScreen from "./src/Views/SrchScnScreen";

export default function App() {
  return (
    <>
      <StatusBar />
      <MyStackNavig />
    </>
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
