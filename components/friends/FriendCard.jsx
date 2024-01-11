import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const FriendCard = ({ friend }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("friendProfile", { friend });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.leftSection}>
        <View style={styles.circularImageContainer}>
          <Image
            source={friend.profileImage}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.name}>{friend.name}</Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{friend.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 2, // Increased horizontal margin for wider cards
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftSection: {
    paddingRight: 10,
  },
  rightSection: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  descriptionBox: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "left",
  },
  circularImageContainer: {
    width: 75, // Increased width for a larger circle
    height: 75, // Increased height for a larger circle
    borderRadius: 40, // Adjust the border radius for a perfect circle
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
});

export default FriendCard;
