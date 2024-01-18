import { Tabs } from "expo-router";
import Icon from "react-native-ico-material-design";

import colors from "../config/colors";

// Layout page for Navigation bar and header using expo-router Tabs
// Includes customization such as Icons, colors, sizes, etc.

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: "white",
          fontSize: 15,
        },
        tabBarStyle: {
          backgroundColor: "#1abc9c",
          height: 60,
          borderWidth: 0,
          borderColor: colors.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <Icon name="home-button" height={25} width={25} color="white" />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="findChat"
        options={{
          tabBarIcon: () => (
            <Icon
              name="searching-magnifying-glass"
              height={25}
              width={25}
              color="white"
            />
          ),
          tabBarLabel: "Find Chat",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: () => (
            <Icon
              name="users-social-symbol"
              height={25}
              width={25}
              color="white"
            />
          ),
          tabBarLabel: "Friends",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: () => (
            <Icon
              name="settings-cogwheel-button"
              height={25}
              width={25}
              color="white"
            />
          ),
          tabBarLabel: "Settings",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1abc9c",
          },
          headerTitle: "Settings",
          headerTitleStyle: {
            color: "white",
            alignContent: "center",
          },
        }}
      />
    </Tabs>
  );
};
