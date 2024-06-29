import axios from 'axios';
import Config from "react-native-config";

// const API_URL = Config.API_URL;
const API_URL = 'http://localhost:8080'; // Adjust this if you're using a different host/port

export const getCollections = async () => {
    try {
        const response = await axios.get(`${API_URL}/collections`);
        return response.data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
};
