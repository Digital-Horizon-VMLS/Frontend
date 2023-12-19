// DeleteAccount.js
import axios from "../../config/axiosConfig";

import { fetchAndStoreTokens } from "../../config/tokenHandler";

// Function for deleting account (currently based on userID)

export const deleteAccount = async (userID) => {
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
    const response = await axios.delete(`${"/api/users"}/${userID}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};
