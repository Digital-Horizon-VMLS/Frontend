import axios from "./axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// File for fetching tokens needed to connect to endpoints

export const fetchAndStoreTokens = async (userID) => {
  try {
    const response = await axios.post("/api/tokens", {
      token: userID,
      type: "id",
    });
    const {
      access_token,
      access_expires_in,
      refresh_token,
      refresh_expires_in,
    } = response.data;

    AsyncStorage.setItem("access_token", access_token);
    AsyncStorage.setItem("refresh_token", refresh_token);
    AsyncStorage.setItem("access_token_expiry", access_expires_in.toString());
    AsyncStorage.setItem("refresh_token_expiry", refresh_expires_in.toString());

    return {
      access_token,
      access_expires_in,
      refresh_token,
      refresh_expires_in,
    };
  } catch (error) {
    console.error("Error fetching tokens:", error);
    throw error;
  }
};
