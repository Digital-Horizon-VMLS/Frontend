import axios from "../../config/axiosConfig";

import { fetchAndStoreTokens } from "../../config/tokenHandler";

// Function for signing account

export const signOut = async (userID) => {
  try {
    const {
      access_token,
      access_expires_in,
      refresh_token,
      refresh_expires_in,
    } = await fetchAndStoreTokens(userID);

    console.log(access_token);
    console.log(userID);

    // Make a delete request to delete the account using the access token
    const response = await axios.delete("/api/tokens/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
