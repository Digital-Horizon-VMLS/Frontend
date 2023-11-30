import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import { UploadImage, EditInfo, Buttons } from '../components/userprofile/EditProfile';
import colors from "../config/colors";

export default function Page() {
    return (
      <SafeAreaView style={{backgroundColor: colors.primary, flex: 1,}}>
        <View style={styles.profilePic}>
          <UploadImage />
        </View>
        <View style={styles.userInfo}>
          <EditInfo />
        </View>

          <Buttons />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      padding:50,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      justifyContent: "center",
      alignItems: "center"
    },
    profilePic: {
      top: 10,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center'
    },
    userInfo: {
      paddingHorizontal: 22,
      top: 200
    },
  });