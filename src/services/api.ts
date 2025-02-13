import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Define the structure of the API response
interface ApiItem {
  id: number;
  title: string;
  body: string; // Matches the API response
}

// Define the structure used in the app
interface Item {
  id: number;
  title: string;
  description: string; // Mapping 'body' from API
}

// Fetch items from API and map 'body' to 'description'
export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get<ApiItem[]>(API_URL);
  return response.data.slice(0, 10).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.body, // Convert 'body' to 'description'
  }));
};

// Create an item and ensure correct structure
export const createItem = async (item: { title: string; description: string }): Promise<Item> => {
  const response = await axios.post<ApiItem>(API_URL, { 
    title: item.title, 
    body: item.description // Convert 'description' to 'body' for API
  });
  
  return { id: response.data.id, title: response.data.title, description: response.data.body };
};

// Update an item in the API
export const updateItem = async (item: Item) => {
  await axios.put(`${API_URL}/${item.id}`, { 
    title: item.title, 
    body: item.description // Convert 'description' to 'body'
  });
};

// Delete an item
export const deleteItem = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
