import React from "react";
import { StyleSheet, Text, Image, SafeAreaView, View } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import DisplayImage from "../components/friends/FriendProfile";

import TopicList from "../components/homescreen/TopicList";
import colors from "../config/colors";

// Home Screen for the application.

export default function Page() {
  const route = useLocalSearchParams();
  const { friend } = route;

  const { name, description, profileImage } = friend;
  console.log(profileImage);
  console.log(description);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.profilePic}>
          <DisplayImage imageUrl={profileImage} />
        </View>

        <Text style={{ fontSize: 22, top: 90, color: "white" }}>{name}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text>{description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    height: 225,
  },
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  profilePic: {
    top: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    paddingHorizontal: 10,
    top: 10,
  },
});
