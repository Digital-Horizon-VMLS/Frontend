import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-ico-material-design';

import styles from './editProfile.style';


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

  const EditInfo = () => {
    const [description, setDescription] = useState("Enter something about yourself");
    const [name, setName] = useState("Enter your name");
    const [email, setEmail] = useState("bababoeee@gmail.com");
    const [password, setPassword] = useState("randompassword");
    return (
      <View>
      <View style={{
          flexDirection: 'column',
          marginBottom: 6
        }}>
          <Text>Description</Text>
          <View style={{
            height: 80,
            width: "100%",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 4,
            marginVertical: 6,
            paddingLeft: 8
          }}>
            <TextInput
              value={description}
              onChangeText={value=>setDescription(value)}
              editable={true}
            />
            
          </View>
        </View>
        
        <View style={{
          flexDirection: 'column',
          marginBottom: 6
        }}>
          <Text>Name</Text>
          <View style={{
            height: 44,
            width: "100%",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 4,
            marginVertical: 6,
            justifyContent: "center",
            paddingLeft: 8
          }}>
            <TextInput
              value={name}
              onChangeText={value=>setName(value)}
              editable={true}
            />
            
          </View>
        </View>

        <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Email</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Password</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>
        
      </View>
      
    );
  };

  const Buttons = () => {
    return(
      <View style={styles.buttonContainer}>
        <Pressable style={styles.saveButton} onPress={console.log}>
          <Text>Update Profile</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={console.log}>
          <Text>Delete Account</Text>
        </Pressable>
      </View>
    );
  };
   
  export {
    UploadImage,
    EditInfo,
    Buttons
  }
  
