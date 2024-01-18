import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import FriendCard from "../components/friends/FriendCard";
import FriendsHeader from "../components/friends/FriendsHeader";

import colors from "../config/colors";

// Page for selecting topics and finding a chat. Uses components found in TopicList.jsx

export default function Page() {
  const initialFriends = [
    {
      id: 1,
      name: "Aden",
      description:
        "My name JeffMy name JeffMy name JeffMy name JeffMy name Jeff",
      profileImage: require("../assets/sea_sky.jpg"),
    },
    {
      id: 2,
      name: "JD",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 3,
      name: "Duy",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 4,
      name: "Duy",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 5,
      name: "Duy",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 6,
      name: "Duy",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 7,
      name: "Duy",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },
    {
      id: 8,
      name: "Cluey",
      description: "Ba?",
      profileImage: require("../assets/anonymous.png"),
    },

    // Add more friend objects here
  ];

  const [allFriends, setAllFriends] = useState(initialFriends);
  const [filteredFriends, setFilteredFriends] = useState(initialFriends);
  const [searchTerm, setSearchTerm] = useState("");
  const scrollViewRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    // Filter friends based on the search term
    const filtered = allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFriends(filtered);

    // Scroll to the first friend in the list after filtering
    if (scrollViewRef.current && filtered.length > 0) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [searchTerm, allFriends]);

  // Scroll to a friend using friendId
  const scrollToFriend = (friendId) => {
    const yOffset = cardRefs.current[friendId]?.y || 0;
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  };

  const setCardHeight = (friendId, height) => {
    cardRefs.current[friendId] = { y: height };
  };

  return (
    <SafeAreaView style={styles.background}>
      <FriendsHeader handleSearch={setSearchTerm} searchTerm={searchTerm} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {filteredFriends.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            onPress={() => scrollToFriend(friend.id)}
            setCardHeight={setCardHeight}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2c3e50",
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});
