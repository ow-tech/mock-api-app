import { useState, useEffect } from "react";
import { fetchItems, createItem, updateItem, deleteItem } from "./services/api";
import ItemList from "./Components/ItemList";
import ItemForm from "./Components/ItemForm";

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
        console.log(data)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    getItems();
  }, []);

  // Handle Add / Update Item
  const handleSaveItem = async (item: Item) => {
    try {
      if (itemToEdit) {
        await updateItem(item);
        setItems((prev) => prev.map((i) => (i.id === item.id ? item : i)));
        setItemToEdit(null);
      } else {
        const newItem = await createItem(item);
        setItems((prev) => [...prev, newItem]);
      }
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  // Handle Delete Item
  const handleDeleteItem = async (id: number) => {
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Item List</h1>
      <ItemForm onSave={handleSaveItem} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} />
      <ItemList items={items} onDelete={handleDeleteItem} onEdit={setItemToEdit} itemToEdit={itemToEdit} />
    </div>
  );
}
