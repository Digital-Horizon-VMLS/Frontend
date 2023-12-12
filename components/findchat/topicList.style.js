import { StyleSheet } from "react-native";

import colors from "../../config/colors";

// Style sheet for TopicList

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 400,
    top: 45,
    marginHorizontal: "auto",
  },
  topicsButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 3,
  },
  topicButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  topicTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
  selectedTopicsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    minHeight: 200, // Set a minimum height to prevent vertical shifting
  },
  selectedTopicsTitle: {
    fontSize: 24, // Increase font size for a more prominent title
    fontWeight: "bold",
    marginBottom: 20, // Increase bottom margin for spacing
    textAlign: "center", // Center the text horizontally
    textDecorationLine: "underline", // Add underline to the text
  },
  selectedTopics: {
    // Remove flexDirection and flexWrap to align vertically
    flexDirection: "column", // Align items vertically
  },
  selectedTopicItem: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 10, // Increase padding to make items bigger
    borderRadius: 20,
    marginBottom: 10,
    textAlign: "center",
    width: "100%", // Make items occupy full width
  },
  startButtonContainer: {
    position: "absolute",
    bottom: 170, // Adjust the bottom position as needed
    alignSelf: "center",
  },
  startButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    // Other button styles (e.g., elevation, shadow, etc.)
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    width: "95%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC55",
  },
  tabHeading: {
    padding: 20,
    flexDirection: "row",
  },
  listWrapper: {
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default styles;
