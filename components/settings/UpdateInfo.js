import axios from "../../config/axiosConfig";
import { fetchAndStoreTokens } from "../../config/tokenHandler";

// Function for updating user data
export const updateUserData = async (userID, userDataToUpdate) => {
  try {
    const {
      access_token,
      access_expires_in,
      refresh_token,
      refresh_expires_in,
    } = await fetchAndStoreTokens(userID);

    // Make a patch request to update the user data using the access token
    const response = await axios.patch(
      `/api/users/${userID}`,
      userDataToUpdate,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
