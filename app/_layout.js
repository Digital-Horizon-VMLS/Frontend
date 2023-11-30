import { Tabs, Navigator, Stack, ExpoRoot} from "expo-router";
import Icon from 'react-native-ico-material-design';

import colors from "../config/colors";

// Layout page for Navigation bar and header using expo-router Tabs
// Includes customization such as Icons, colors, sizes, etc.

export default () => {
    return (
        <Tabs 
            screenOptions={{tabBarShowLabel: false, tabBarStyle: {backgroundColor: colors.secondary, height: 60, borderWidth: 0, borderColor: colors.primary} }}>
        <Tabs.Screen name="index" options={{tabBarIcon: () => <Icon name="home-button" height={30} width={30} color='black'/>, headerShown: false}} />

        <Tabs.Screen name="editProfile" options={{tabBarIcon: () => <Icon name="user-shape" height={30} width={30} color='black'/>, headerStyle: {
            backgroundColor: colors.secondary, 
        }, headerTitle: "Edit Profile"}} />

        </Tabs>
    )
}