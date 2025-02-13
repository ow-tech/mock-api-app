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
  try {
    const response = await axios.get<ApiItem[]>(API_URL);
    return response.data.slice(0, 10).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.body,
    }));
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch items."
    );
  }
};
// Create an item and ensure correct structure
export const createItem = async (item: {
  title: string;
  description: string;
}): Promise<Item> => {
  try {
    const response = await axios.post<ApiItem>(API_URL, {
      title: item.title,
      body: item.description,
    });
    return {
      id: response.data.id,
      title: response.data.title,
      description: response.data.body,
    };
  } catch (error) {
    console.error("Error creating item:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to create item."
    );
  }
};

// Update an item in the API
export const updateItem = async (item: Item) => {
  try {
    await axios.put(`${API_URL}/${item.id}`, {
      title: item.title,
      body: item.description,
    });
  } catch (error) {
    console.error(`Error updating item with ID ${item.id}:`, error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to update item."
    );
  }
};

// Delete an item
export const deleteItem = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete item."
    );
  }
};
