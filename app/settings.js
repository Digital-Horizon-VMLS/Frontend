import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";

import { UploadImage, EditInfo } from "../components/settings/EditSettings";
import colors from "../config/colors";

// Settings Page that uses componets found in EditSettings.jsx

export default function Page() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.profilePic}>
          <UploadImage />
        </View>

        <Text style={{ fontSize: 22, top: 90, color: "white" }}>Username</Text>
      </View>
      <View style={styles.userInfo}>
        <EditInfo />
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
