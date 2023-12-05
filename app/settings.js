import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

import { UploadImage, EditInfo } from '../components/settings/EditSettings';
import colors from "../config/colors";

export default function Page() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
            <View style={styles.profilePic}>
                <UploadImage />
            </View>

            <Text style={{fontSize: 22, top: 90}}>Username</Text>

   
  
           
        </View>
            <View style={styles.userInfo}>
                <EditInfo />
            </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.41
    },
    background: {
      backgroundColor: colors.primary, 
      flex: 1,
    },
    profilePic: {
      top: 10,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInfo: {
      paddingHorizontal: 10,
      top: 10
    },
  });