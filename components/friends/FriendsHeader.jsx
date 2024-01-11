import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-ico-material-design";

const FriendsHeader = ({ handleSearch, searchTerm }) => {
  const updateSearch = (text) => {
    handleSearch(text);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>
        <Icon
          name="searching-magnifying-glass"
          color="grey"
          style={styles.icon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends..."
          onChangeText={updateSearch}
          value={searchTerm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25, // Increased header height
    paddingHorizontal: 12, // Adjusted horizontal padding
    backgroundColor: "#1abc9c", // Header background color
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 3,
  },
  icon: {
    marginHorizontal: 10, // Adjust the spacing between the icon and the input
  },
});

export default FriendsHeader;
