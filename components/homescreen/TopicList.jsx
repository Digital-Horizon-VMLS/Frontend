import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  Switch,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import axios from "axios";
import { Stack } from "expo-router";
import Constants from "expo-constants";

import styles from "./topicList.style";

// Contains an ItemRenderer, List of topics, FlatList, and user interaction for selection of topics
// Currently users can select as many topics as they would like

const ItemRenderer = ({ id, name, selected, onUpdateValue }) => (
  <View style={styles.item}>
    <Text style={styles.topicTitle}>{name}</Text>
    <Switch
      value={selected}
      onValueChange={(value) => onUpdateValue(id, value)}
    />
  </View>
);

const uri = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:4000`)
  : `localhost:4000`;

axios.defaults.baseURL = "https://6b5b-174-164-216-97.ngrok-free.app";
console.log(axios.defaults.baseURL);

const TopicList = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  openList = () => setOpen(true);
  closeList = () => setOpen(false);
  onUpdateValue = (id, value) => {
    data[id].selected = value;
    return setData([...data]);
  };
  renderItem = ({ item, id }) => (
    <ItemRenderer
      key={id}
      id={id}
      selected={item.selected}
      name={item.name}
      onUpdateValue={onUpdateValue}
    />
  );
  return (
    <View style={styles.main}>
      <Stack screenOptions={{ headerShown: false }} />

      <TouchableOpacity onPress={openList}>
        <View style={{ padding: 6, borderWidth: 1, borderColor: "#000" }}>
          <Text>Choose Your Topics</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>Selected Items</Text>
        {data
          .filter((item) => item.selected)
          .map((item) => (
            <Text key={item.name}>{item.name}</Text>
          ))}
      </View>

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
    </View>
  );
};

export default TopicList;
