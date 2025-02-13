// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { fetchItems } from "./services/api";


interface Item {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

  // Fetch items on initial render
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    getItems();
  }, []);

  

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Item List</h1>
       {/* Map through items and display */}
       <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
