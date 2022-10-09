import axios from "axios";
import { APIs } from '../constants/APIs'; 

axios.defaults.baseURL = APIs.defaultUrl;

export async function getUserPositionId() {
  try {
      const response = await axios.get(`/positions`);
    
      return response.data.positions;
     
      
  } catch (error) {
    console.log(error.message);
  }
};