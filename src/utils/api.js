import axios from "axios";

const serverApi = "http://localhost:5002/api";

// GET request
export const getRoomExists = async (roomId) => {
    const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
    return response.data;
  };