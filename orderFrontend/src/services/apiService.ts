import axios from "axios";
import { ItemType } from "../types/ItemsType";

const API_URL = "http://localhost:5000/api/orders";

export const placeOrder = async (selectedItems:ItemType[]) => {
  try {
    const response = await axios.post(`${API_URL}/place-order`, { selectedItems });
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    return { packages: [] };
  }
};
