import React, { useState, useEffect, useCallback } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput, Pressable, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-ico-material-design';

import styles from './editSettings.style';

const UploadImage = () => {
    const [image, setImage] = useState(null);
  
    const addImage = async () => {
      let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(JSON.stringify(_image));
  
      if (!_image.cancelled) {
        setImage(_image.uri);
      }
    };

    return (
      <View style={{
        flex: 1,
        paddingHorizontal: 22
      }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
          </View>
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
              <Text>{image ? 'Edit' : 'Upload'} Image</Text>
              <Icon name="camera" height={20} width={20} color='black'/>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  };
//assets/fonts/OpenSans_Condensed-Medium.ttf
  const EditInfo = () => {
    const [fontsLoaded, fontError] = useFonts({
      'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Italic': require('../../assets/fonts/OpenSans-Italic.ttf'),
      'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Bold': require('../../assets/fonts/OpenSans_Condensed-Bold.ttf'),
      'OpenSans-Medium': require('../../assets/fonts/OpenSans_Condensed-Medium.ttf'),
    });

    const [showModal, setShowModal] = useState(false);
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    return (
      <View>
      <Modal 
        transparent={true}
        visible={showModal}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Shello</Text>
            <Pressable style={styles.saveButton} onPress={() => setShowModal(false)}>
              <Text>Save Changes</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      <Pressable onPress={() => setShowModal(true)}>
        <View style={styles.textOptions}>
        <Icon name="create-new-pencil-button" height={25} width={25} color='black'/>
          <Text style={{fontFamily: 'OpenSans-SemiBold', fontSize: 18}}>Update Profile</Text>
        </View>
      </Pressable>

      <View style={styles.textOptions}>
      <Icon name="locked-padlock-outline" height={25} width={25} color='black'/>
        <Text style={{fontFamily: 'OpenSans-SemiBold', fontSize: 18}}>Change Password</Text>
      </View>
        
      </View>
      
    );
  };

  export {
    UploadImage,
    EditInfo,
  }