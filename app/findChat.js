import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

import TopicList from "../components/findchat/TopicList";
import colors from "../config/colors";

// Page for selecting topics and finding a chat. Uses components found in TopicList.jsx

export default function Page() {
  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.logo} source={require("../assets/anonymous.png")} />
      <Text style={styles.appName}>Anonymous Roulette</Text>

      <TopicList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 60,
  },
  appName: {
    position: "absolute",
    paddingHorizontal: 1,
    top: 150,
    fontSize: 40,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  topicTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    width: "95%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC55",
  },
  tabHeading: {
    padding: 20,
    flexDirection: "row",
  },
  listWrapper: {
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
