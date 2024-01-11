import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import axios from "../../config/axiosConfig";
import { Stack } from "expo-router";
import Constants from "expo-constants";

import styles from "./topicList.style";

// Contains an ItemRenderer, List of topics, FlatList, and user interaction for selection of topics
// Users can select up to 3 topics
// Uses categories API to display topics

// ItemRenderer component for rendering each topic item
const ItemRenderer = ({ id, name, selected, onUpdateValue }) => (
  <View style={styles.item}>
    <Text style={styles.topicTitle}>{name}</Text>
    <Switch
      value={selected}
      onValueChange={(value) => onUpdateValue(id, value)}
    />
  </View>
);

const TopicList = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  // Fetch topics data from an API on component mount
  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to open the topics list modal
  const openList = () => setOpen(true);
  // Function to close the topics list modal
  const closeList = () => setOpen(false);

  // Function to update selected topics
  const onUpdateValue = (index, value) => {
    const selectedTopicsCount = data.filter((item) => item.selected).length;
    if (selectedTopicsCount < 3 || !value) {
      const updatedData = [...data];
      updatedData[index].selected = value;
      setData(updatedData);
      updateSelectedTopics(updatedData);
    } else {
      // Alert if the maximum limit of topics is reached
      alert("Maximum limit of 3 topics reached");
    }
  };

  // Update selected topics in state
  const updateSelectedTopics = (updatedData) => {
    const selected = updatedData
      .filter((item) => item.selected)
      .map((item) => item.name);
    setSelectedTopics(selected);
  };

  // Function to check if at least one topic is selected
  const isAtLeastOneTopicSelected = () => {
    return selectedTopics.length > 0;
  };

  // Function to handle button press action
  const handleButtonPress = () => {
    // Handle button press action here
    // This will only be triggered if at least one topic is selected
  };

  // Render each item in FlatList
  const renderItem = ({ item, index }) => (
    <ItemRenderer
      key={item.id}
      id={index}
      selected={item.selected}
      name={item.name}
      onUpdateValue={onUpdateValue}
    />
  );

  return (
    <View style={styles.main}>
      <Stack screenOptions={{ headerShown: false }} />

      {/* Button to open the topics list modal */}
      <TouchableOpacity style={styles.topicsButton} onPress={openList}>
        <Text style={styles.topicButtonText}>Choose Your Topics</Text>
      </TouchableOpacity>

      {/* View to display selected topics */}
      <View style={styles.selectedTopicsContainer}>
        <Text style={styles.selectedTopicsTitle}>
          {selectedTopics.length > 0 ? "Selected Items" : "No Topics Selected"}
        </Text>
        <View style={styles.selectedTopics}>
          {data
            .filter((item) => item.selected)
            .map((item) => (
              <Text style={styles.selectedTopicItem} key={item.name}>
                {item.name}
              </Text>
            ))}
        </View>
      </View>

      {/* Modal to display topics list */}
      <Modal animationType="slide" transparent={true} visible={open === true}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeList}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, marginTop: 250 }}>
            <View style={styles.listWrapper}>
              <View style={styles.listContainer}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.name}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Button to perform an action when at least one topic is selected */}

      <View style={styles.startButtonContainer}>
        <TouchableOpacity
          style={[
            styles.startButton,
            { opacity: isAtLeastOneTopicSelected() ? 1 : 0.5 },
          ]}
          disabled={!isAtLeastOneTopicSelected()}
          onPress={handleButtonPress}
        >
          <Text style={styles.startButtonText}>Find a Chat!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopicList;
