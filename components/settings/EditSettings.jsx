import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import axios from "../../config/axiosConfig";
import Icon from "react-native-ico-material-design";

import { deleteAccount } from "./DeleteAccount";
import styles from "./editSettings.style";

// Includes settings page components such as Image uploader, and various settings options
// Changing password, signing out, and deleting account not yet implemented as intended

// Component for uploading an image
const UploadImage = () => {
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.canceled) {
      setImage(_image.uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 22,
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
          {!image && (
            <Icon name="user-shape" height={130} width={130} color="#BFBDBD" />
          )}
        </View>
        <View style={styles.uploadBtnContainer}>
          <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
            <Text>{image ? "Edit" : "Upload"} Image</Text>
            <Icon name="camera" height={20} width={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Component for editing user information
const EditInfo = () => {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [ethnicities, setEthnicities] = useState([]);
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);
  const [showModalForEthnicities, setShowModalForEthnicities] = useState(false);

  useEffect(() => {
    axios
      .get("/api/ethnicities")
      .then((response) => setEthnicities(response.data)) // Update to setEthnicities
      .catch((err) => console.log(err));
  }, []);

  const handleSelectEthnicity = (ethnicity) => {
    setSelectedEthnicity(ethnicity);
    setShowModalOne(false); // Hide the modal after selection
  };

  const [description, setDescription] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();

  const [fontsLoaded, fontError] = useFonts({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Italic": require("../../assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-SemiBold": require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans_Condensed-Bold.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans_Condensed-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleDeleteAccount = async () => {
    const userId = 1; // Replace with the actual user ID
    try {
      const result = await deleteAccount(userId);
      console.log("Account deleted:", result);
      // Handle success or show a message
    } catch (error) {
      console.error("Error deleting account:", error);
      // Handle error or show an error message
    }
  };

  return (
    <View>
      <Modal transparent={true} visible={showModalOne}>
        <View style={styles.centerView}>
          <View style={styles.modalViewOne}>
            <View style={styles.modalOverhead}>
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 25,
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                Update Profile Information
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <View
                style={{
                  height: 80,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={{ fontSize: 14 }}
                  placeholder="Enter something about yourself"
                  value={description}
                  multiline={true}
                  onChangeText={(value) => setDescription(value)}
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
              <View
                style={{
                  height: 44,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={{ fontSize: 14 }}
                  placeholder="First Name"
                  value={firstName}
                  multiline={true}
                  onChangeText={(value) => setFirstName(value)}
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
              <View
                style={{
                  height: 44,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={{ fontSize: 14 }}
                  placeholder="Last Name"
                  value={lastName}
                  multiline={true}
                  onChangeText={(value) => setLastName(value)}
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
              <View
                style={{
                  height: 44,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={{ fontSize: 14 }}
                  placeholder="Email"
                  value={email}
                  multiline={true}
                  onChangeText={(value) => setEmail(value)}
                  editable={true}
                />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }}>
              <Pressable onPress={() => setShowModalForEthnicities(true)}>
                <View
                  style={{
                    height: 44,
                    width: 275,
                    borderColor: "grey",
                    borderWidth: 1,
                    borderRadius: 4,
                    marginVertical: 6,
                    justifyContent: "center",
                    paddingLeft: 8,
                    alignSelf: "center",
                  }}
                >
                  <Text style={{ fontSize: 14 }}>
                    {selectedEthnicity
                      ? selectedEthnicity.name
                      : "Select Ethnicity"}
                  </Text>
                </View>
              </Pressable>

              <Modal transparent={true} visible={showModalForEthnicities}>
                <View style={styles.centerView}>
                  <View style={styles.modalViewOne}>
                    <FlatList
                      data={ethnicities}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <Pressable
                          style={styles.ethnicityItem}
                          onPress={() => {
                            handleSelectEthnicity(item);
                            setShowModalForEthnicities(false); // Close the modal after selecting an ethnicity
                          }}
                        >
                          <Text style={styles.ethnicityText}>{item.name}</Text>
                        </Pressable>
                      )}
                    />
                  </View>
                </View>
              </Modal>
            </View>

            <Pressable
              style={styles.updateButton}
              onPress={() => setShowModalOne(false)}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Update
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setShowModalOne(true)}>
        <View style={styles.textOptions}>
          <Icon
            name="create-new-pencil-button"
            height={25}
            width={25}
            color="black"
          />
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 18 }}>
            Update Profile
          </Text>
        </View>
      </Pressable>
      <Modal transparent={true} visible={showModalTwo}>
        <View style={styles.centerView}>
          <View style={styles.modalViewTwo}>
            <View style={styles.modalOverhead}>
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 25,
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                Change Password
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <View
                style={{
                  height: 44,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  placeholder="Old Password"
                  value={oldPass}
                  multiline={true}
                  onChangeText={(value) => setOldPass(value)}
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
              <View
                style={{
                  height: 44,
                  width: 275,
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                  alignSelf: "center",
                }}
              >
                <TextInput
                  placeholder="New Password"
                  value={newPass}
                  multiline={true}
                  onChangeText={(value) => setNewPass(value)}
                  editable={true}
                />
              </View>
            </View>
            <Pressable
              style={styles.updateButton}
              onPress={() => setShowModalTwo(false)}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Update
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setShowModalTwo(true)}>
        <View style={styles.textOptions}>
          <Icon
            name="locked-padlock-outline"
            height={25}
            width={25}
            color="black"
          />
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 18 }}>
            Change Password
          </Text>
        </View>
      </Pressable>

      <View style={styles.textOptions}>
        <Icon name="exit-to-app-button" height={25} width={25} color="black" />
        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
            fontSize: 18,
            color: "black",
          }}
        >
          Sign Out
        </Text>
      </View>
      <Pressable onPress={handleDeleteAccount}>
        <View style={styles.textOptions}>
          <Icon
            name="rubbish-bin-delete-button"
            height={25}
            width={25}
            color="red"
          />
          <Text
            style={{
              fontFamily: "OpenSans-SemiBold",
              fontSize: 18,
              color: "red",
            }}
          >
            Delete Account
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export { UploadImage, EditInfo };
