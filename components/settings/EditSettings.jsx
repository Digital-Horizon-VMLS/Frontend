import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  Pressable,
  Modal,
  FlatList,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "../../config/axiosConfig";
import Icon from "react-native-ico-material-design";

import { updateUserData } from "./UpdateInfo";
import { deleteAccount } from "./DeleteAccount";
import { signOut } from "./SignOut";
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

  // Ethnicities endpoint
  useEffect(() => {
    axios
      .get("/api/ethnicities")
      .then((response) => setEthnicities(response.data)) // Update to setEthnicities
      .catch((err) => console.log(err));
  }, []);

  const handleSelectEthnicity = (ethnicity) => {
    setSelectedEthnicity(ethnicity);
    setShowModalForEthnicities(false); // Hide the modal after selection
  };

  const [description, setDescription] = useState();
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [temporaryDate, setTemporaryDate] = useState(dateOfBirth);
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();

  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowPicker(Platform.OS === "ios"); // Close date picker on iOS
    setDateOfBirth(currentDate);
  };

  const [originalState, setOriginalState] = useState({
    description: "",
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    temporaryDate: null,
  });

  useEffect(() => {
    // Save the initial state when the component mounts
    setOriginalState({
      description,
      username,
      firstName,
      lastName,
      dateOfBirth,
      temporaryDate,
      // Add other fields you want to revert
    });
  }, []);

  const handleCancel = () => {
    // Revert to the original state when the modal is closed without updating
    setDescription(originalState.description);
    setUsername(originalState.username);
    setFirstName(originalState.firstName);
    setLastName(originalState.lastName);
    setDateOfBirth(originalState.dateOfBirth);
    setTemporaryDate(originalState.temporaryDate);
    // Revert other fields as needed
    setShowModalOne(false);
  };

  const handleUpdate = async () => {
    const userID = 1; // Replace with the actual user ID

    // Create an object with the fields to be updated
    const userDataToUpdate = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      profile_description: description,
      ethnic_id: selectedEthnicity?.id,
      birth_date: dateOfBirth, // Updated to use temporaryDate
      // Add other fields you want to update
    };

    try {
      // Call the updateUserData function with the user ID and updated data
      const updatedData = await updateUserData(userID, userDataToUpdate);
      console.log("User data updated successfully:", updatedData);
      // Handle success (e.g., show a success message, update UI, etc.)
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle error (e.g., show an error message)
    }
  };

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
    const userId = 1;
    try {
      const result = await deleteAccount(userId);
      console.log("Account deleted:", result);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  const handleSignOut = async () => {
    const userId = 1; // Replace with the actual user ID
    try {
      const result = await signOut(userId);
      console.log("You have successfully signed out:", result);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View>
      <Modal transparent={true} visible={showModalOne} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setShowModalOne(false)}>
          <View style={styles.centerView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                      placeholder="Username"
                      value={username}
                      multiline={true}
                      onChangeText={(text) => setUsername(text)}
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
                    {Platform.OS === "ios" ? (
                      <Pressable onPress={toggleDatePicker}>
                        <Text style={{ fontSize: 14 }}>
                          {dateOfBirth
                            ? dateOfBirth.toLocaleDateString()
                            : "Date of Birth"}
                        </Text>
                      </Pressable>
                    ) : (
                      <Pressable onPress={toggleDatePicker}>
                        <TextInput
                          style={{ fontSize: 14 }}
                          placeholder={
                            temporaryDate
                              ? temporaryDate.toLocaleDateString()
                              : "Date of Birth"
                          }
                          value={
                            temporaryDate
                              ? temporaryDate.toLocaleDateString()
                              : ""
                          }
                          multiline={true}
                          onChangeText={(value) => setTemporaryDate(value)}
                          editable={false}
                        />
                      </Pressable>
                    )}
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
                      <Text
                        style={{
                          fontSize: 14,
                          color: selectedEthnicity
                            ? "black"
                            : "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {selectedEthnicity
                          ? selectedEthnicity.name
                          : "Select Ethnicity"}
                      </Text>
                    </View>
                  </Pressable>

                  <Modal transparent={true} visible={showModalForEthnicities}>
                    <TouchableWithoutFeedback
                      onPress={() => setShowModalForEthnicities(false)}
                    >
                      <View style={styles.centerView}>
                        <View style={styles.ethnicityModal}>
                          <Text style={styles.modalHeader}>
                            Select Ethnicity
                          </Text>
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
                                <Text style={styles.ethnicityText}>
                                  {item.name}
                                </Text>
                              </Pressable>
                            )}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>

                <View style={styles.updateAndCancel}>
                  <Pressable style={styles.updateButton} onPress={handleUpdate}>
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
                  <Pressable style={styles.cancelButton} onPress={handleCancel}>
                    <Text
                      style={{
                        fontFamily: "OpenSans-SemiBold",
                        color: "white",
                        fontSize: 20,
                      }}
                    >
                      Cancel
                    </Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
        {showPicker && Platform.OS === "ios" && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={dateOfBirth || new Date()}
            onChange={onChangeDate}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              backgroundColor: "white",
            }}
            textColor="black"
          />
        )}
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

      <Pressable onPress={handleSignOut}>
        <View style={styles.textOptions}>
          <Icon
            name="exit-to-app-button"
            height={25}
            width={25}
            color="black"
          />
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
      </Pressable>
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
