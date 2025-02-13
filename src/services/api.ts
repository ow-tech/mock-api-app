import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";



interface Item {
  id: number;
  title: string;
  description: string;
}

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get<Item[]>(API_URL);
  return response.data.slice(0, 10).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
  }));
};


