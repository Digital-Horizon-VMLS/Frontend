import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-ico-material-design";

const DisplayImage = ({ imageUrl }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 22 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.imageStyle} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    elevation: 2,
    height: 170,
    width: 170,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    borderWidth: 2,
    overflow: "hidden",
  },
  circularImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
};

export default DisplayImage;
